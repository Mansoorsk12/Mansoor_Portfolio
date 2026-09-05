import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Calendar, 
  User, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  BarChart3,
  Filter,
  Search,
  Bell,
  Settings,
  Home
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "review" | "completed";
  priority: "low" | "medium" | "high" | "urgent";
  assignee: string;
  assigneeAvatar: string;
  dueDate: string;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: "online" | "offline" | "away";
}

const TaskManager = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design Landing Page",
      description: "Create a modern and responsive landing page design for the new product launch",
      status: "in-progress",
      priority: "high",
      assignee: "Sarah Johnson",
      assigneeAvatar: "SJ",
      dueDate: "2024-01-15",
      comments: [
        {
          id: "c1",
          author: "John Doe",
          authorAvatar: "JD",
          content: "Great progress on the wireframes!",
          timestamp: "2024-01-10 14:30"
        }
      ],
      createdAt: "2024-01-08",
      updatedAt: "2024-01-10"
    },
    {
      id: "2",
      title: "API Integration",
      description: "Integrate payment gateway API with the checkout process",
      status: "todo",
      priority: "urgent",
      assignee: "Mike Chen",
      assigneeAvatar: "MC",
      dueDate: "2024-01-12",
      comments: [],
      createdAt: "2024-01-09",
      updatedAt: "2024-01-09"
    },
    {
      id: "3",
      title: "User Testing",
      description: "Conduct usability testing sessions with target users",
      status: "review",
      priority: "medium",
      assignee: "Emily Davis",
      assigneeAvatar: "ED",
      dueDate: "2024-01-20",
      comments: [
        {
          id: "c2",
          author: "Sarah Johnson",
          authorAvatar: "SJ",
          content: "Test results look promising!",
          timestamp: "2024-01-11 09:15"
        }
      ],
      createdAt: "2024-01-05",
      updatedAt: "2024-01-11"
    },
    {
      id: "4",
      title: "Database Optimization",
      description: "Optimize database queries for better performance",
      status: "completed",
      priority: "low",
      assignee: "Alex Wilson",
      assigneeAvatar: "AW",
      dueDate: "2024-01-08",
      comments: [],
      createdAt: "2024-01-03",
      updatedAt: "2024-01-08"
    }
  ]);

  const [teamMembers] = useState<TeamMember[]>([
    { id: "1", name: "Sarah Johnson", email: "sarah@company.com", avatar: "SJ", role: "Designer", status: "online" },
    { id: "2", name: "Mike Chen", email: "mike@company.com", avatar: "MC", role: "Developer", status: "online" },
    { id: "3", name: "Emily Davis", email: "emily@company.com", avatar: "ED", role: "Product Manager", status: "away" },
    { id: "4", name: "Alex Wilson", email: "alex@company.com", avatar: "AW", role: "Backend Developer", status: "offline" },
    { id: "5", name: "John Doe", email: "john@company.com", avatar: "JD", role: "Team Lead", status: "online" }
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium" as const,
    assignee: "",
    dueDate: ""
  });

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [newComment, setNewComment] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random task updates
      if (Math.random() > 0.7) {
        const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
        if (randomTask) {
          toast({
            title: "Real-time Update",
            description: `${randomTask.assignee} updated "${randomTask.title}"`,
            duration: 3000,
          });
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [tasks, toast]);

  const createTask = () => {
    if (!newTask.title || !newTask.assignee) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      status: "todo",
      priority: newTask.priority,
      assignee: newTask.assignee,
      assigneeAvatar: newTask.assignee.split(" ").map(n => n[0]).join(""),
      dueDate: newTask.dueDate,
      comments: [],
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    setTasks([...tasks, task]);
    setNewTask({ title: "", description: "", priority: "medium", assignee: "", dueDate: "" });
    
    toast({
      title: "Task Created",
      description: `New task "${task.title}" has been assigned to ${task.assignee}`,
    });
  };

  const updateTaskStatus = (taskId: string, newStatus: Task["status"]) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: newStatus, updatedAt: new Date().toISOString().split('T')[0] }
        : task
    ));
    
    const task = tasks.find(t => t.id === taskId);
    toast({
      title: "Status Updated",
      description: `"${task?.title}" moved to ${newStatus.replace("-", " ")}`,
    });
  };

  const addComment = () => {
    if (!selectedTask || !newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "You",
      authorAvatar: "YO",
      content: newComment,
      timestamp: new Date().toLocaleString()
    };

    setTasks(tasks.map(task => 
      task.id === selectedTask.id 
        ? { ...task, comments: [...task.comments, comment] }
        : task
    ));

    setSelectedTask({
      ...selectedTask,
      comments: [...selectedTask.comments, comment]
    });

    setNewComment("");
    
    toast({
      title: "Comment Added",
      description: "Your comment has been posted",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive";
      case "high": return "secondary";
      case "medium": return "outline";
      case "low": return "outline";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "in-progress": return "secondary";
      case "review": return "outline";
      case "todo": return "outline";
      default: return "outline";
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === "all" || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getProjectStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "completed").length;
    const inProgress = tasks.filter(t => t.status === "in-progress").length;
    const overdue = tasks.filter(t => new Date(t.dueDate) < new Date() && t.status !== "completed").length;
    
    return { total, completed, inProgress, overdue, completionRate: total > 0 ? (completed / total) * 100 : 0 };
  };

  const stats = getProjectStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <Home className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <div>
                <h1 className="text-2xl font-bold gradient-text">TaskFlow Pro</h1>
                <p className="text-sm text-muted-foreground">Team Collaboration Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{stats.total}</p>
                  <p className="text-sm text-muted-foreground">Total Tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.completed}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.inProgress}</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">{stats.overdue}</p>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Project Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Completion</span>
                <span>{Math.round(stats.completionRate)}%</span>
              </div>
              <Progress value={stats.completionRate} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="kanban" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <TabsList className="grid w-full sm:w-auto grid-cols-3">
              <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
              <TabsTrigger value="list">Task List</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-32">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="glow-button">
                    <Plus className="w-4 h-4 mr-2" />
                    New Task
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create New Task</DialogTitle>
                    <DialogDescription>
                      Add a new task to your project workflow
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Task title"
                      value={newTask.title}
                      onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    />
                    <Textarea
                      placeholder="Task description"
                      value={newTask.description}
                      onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                    />
                    <Select value={newTask.priority} onValueChange={(value: any) => setNewTask({...newTask, priority: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={newTask.assignee} onValueChange={(value) => setNewTask({...newTask, assignee: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Assign to" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamMembers.map(member => (
                          <SelectItem key={member.id} value={member.name}>
                            {member.name} - {member.role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                    />
                    <Button onClick={createTask} className="w-full glow-button">
                      Create Task
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <TabsContent value="kanban">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {["todo", "in-progress", "review", "completed"].map((status) => (
                <div key={status} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold capitalize text-lg">
                      {status.replace("-", " ")}
                    </h3>
                    <Badge variant="outline">
                      {filteredTasks.filter(task => task.status === status).length}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {filteredTasks
                      .filter(task => task.status === status)
                      .map((task) => (
                        <Card key={task.id} className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer group"
                              onClick={() => setSelectedTask(task)}>
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors">
                                {task.title}
                              </CardTitle>
                              <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                                {task.priority}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                              {task.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback className="text-xs">{task.assigneeAvatar}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-muted-foreground">{task.assignee.split(" ")[0]}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                              </div>
                            </div>
                            {task.comments.length > 0 && (
                              <div className="flex items-center space-x-1 mt-2">
                                <MessageSquare className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{task.comments.length}</span>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-4">
              {filteredTasks.map((task) => (
                <Card key={task.id} className="glass-card hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedTask(task)}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="font-semibold">{task.title}</h3>
                          <Badge variant={getStatusColor(task.status)}>
                            {task.status.replace("-", " ")}
                          </Badge>
                          <Badge variant={getPriorityColor(task.priority)}>
                            {task.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{task.assignee}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{task.dueDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>{task.comments.length} comments</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Select value={task.status} onValueChange={(value: any) => updateTaskStatus(task.id, value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todo">To Do</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="review">Review</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => {
                const memberTasks = tasks.filter(task => task.assignee === member.name);
                const completedTasks = memberTasks.filter(task => task.status === "completed");
                
                return (
                  <Card key={member.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{member.avatar}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                            member.status === "online" ? "bg-green-500" :
                            member.status === "away" ? "bg-yellow-500" : "bg-gray-400"
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Tasks Assigned</span>
                          <Badge variant="outline">{memberTasks.length}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Completed</span>
                          <Badge variant="default">{completedTasks.length}</Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Completion Rate</span>
                            <span>{memberTasks.length > 0 ? Math.round((completedTasks.length / memberTasks.length) * 100) : 0}%</span>
                          </div>
                          <Progress 
                            value={memberTasks.length > 0 ? (completedTasks.length / memberTasks.length) * 100 : 0} 
                            className="h-2" 
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Task Details Modal */}
      {selectedTask && (
        <Dialog open={!!selectedTask} onOpenChange={() => setSelectedTask(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{selectedTask.title}</span>
                <div className="flex space-x-2">
                  <Badge variant={getPriorityColor(selectedTask.priority)}>
                    {selectedTask.priority}
                  </Badge>
                  <Badge variant={getStatusColor(selectedTask.status)}>
                    {selectedTask.status.replace("-", " ")}
                  </Badge>
                </div>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedTask.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Assignee</h4>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{selectedTask.assigneeAvatar}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{selectedTask.assignee}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Due Date</h4>
                  <p className="text-sm text-muted-foreground">{selectedTask.dueDate}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Status</h4>
                <Select value={selectedTask.status} onValueChange={(value: any) => {
                  updateTaskStatus(selectedTask.id, value);
                  setSelectedTask({...selectedTask, status: value});
                }}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comments ({selectedTask.comments.length})
                </h4>
                
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {selectedTask.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{comment.authorAvatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-sm">{comment.author}</span>
                          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2 mt-4">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={addComment} disabled={!newComment.trim()}>
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TaskManager;