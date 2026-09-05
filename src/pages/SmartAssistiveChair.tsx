import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Heart, 
  Thermometer, 
  Battery, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Home,
  User,
  Settings
} from "lucide-react";

const SmartAssistiveChair = () => {
  const [activityLevel, setActivityLevel] = useState(75);
  const [heartRate, setHeartRate] = useState(72);
  const [temperature, setTemperature] = useState(98.6);
  const [batteryLevel, setBatteryLevel] = useState(85);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => prev + Math.floor(Math.random() * 6) - 3);
      setActivityLevel(prev => Math.max(0, Math.min(100, prev + Math.floor(Math.random() * 10) - 5)));
      setTemperature(prev => prev + (Math.random() - 0.5) * 0.2);
      setBatteryLevel(prev => Math.max(0, prev - 0.1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const mockData = {
    patient: {
      name: "John Doe",
      age: 45,
      condition: "Mobility Impaired",
      lastActive: "2 minutes ago"
    },
    alerts: [
      { type: "warning", message: "Low activity detected for 30 minutes", time: "5 min ago" },
      { type: "info", message: "Battery level below 90%", time: "15 min ago" }
    ],
    dailyGoals: {
      movement: { current: 680, target: 1000, unit: "minutes" },
      socialInteraction: { current: 3, target: 5, unit: "sessions" },
      medication: { current: 2, target: 3, unit: "doses" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <Home className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <h1 className="text-2xl font-bold gradient-text">Smart Assistive Chair Monitor</h1>
            </div>
            <Badge variant="secondary" className="glass">
              <Activity className="w-3 h-3 mr-1" />
              Live Monitoring
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Patient Info */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="gradient-text">{mockData.patient.name}</CardTitle>
                  <CardDescription>
                    Age: {mockData.patient.age} | Condition: {mockData.patient.condition}
                  </CardDescription>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Last Active</p>
                <p className="font-semibold">{mockData.patient.lastActive}</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="glass w-full justify-start">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Goals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>Heart Rate</CardDescription>
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold gradient-text">{heartRate} BPM</div>
                  <div className="text-xs text-muted-foreground mt-1">Normal range</div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>Body Temperature</CardDescription>
                    <Thermometer className="w-4 h-4 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold gradient-text">{temperature.toFixed(1)}°F</div>
                  <div className="text-xs text-muted-foreground mt-1">Normal</div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>Activity Level</CardDescription>
                    <Activity className="w-4 h-4 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold gradient-text">{activityLevel}%</div>
                  <Progress value={activityLevel} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription>Battery Level</CardDescription>
                    <Battery className="w-4 h-4 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold gradient-text">{batteryLevel.toFixed(0)}%</div>
                  <Progress value={batteryLevel} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Location & Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Current Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Living Room</p>
                    <p className="text-sm text-muted-foreground">Last updated: 1 minute ago</p>
                    <div className="w-full h-32 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Indoor Location Map</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Activity Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Exercise Session</span>
                      <span className="text-xs text-muted-foreground">2:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Medication Taken</span>
                      <span className="text-xs text-muted-foreground">1:15 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Social Interaction</span>
                      <span className="text-xs text-muted-foreground">11:45 AM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            {mockData.alerts.map((alert, index) => (
              <Alert key={index} className="glass">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <div className="flex justify-between items-center">
                    <span>{alert.message}</span>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid gap-6">
              {Object.entries(mockData.dailyGoals).map(([key, goal]) => (
                <Card key={key} className="glass-card">
                  <CardHeader>
                    <CardTitle className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span>{goal.current} / {goal.target} {goal.unit}</span>
                      <span className="text-sm text-muted-foreground">
                        {Math.round((goal.current / goal.target) * 100)}%
                      </span>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SmartAssistiveChair;