import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GPlogo from "@/assets/GPlogo.svg";

const CodeEntry = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code === "piubellacosa") {
      localStorage.setItem("gallery-access", "granted");
      navigate("/");
    } else {
      setError("Invalid access code. Please try again.");
      setCode("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={GPlogo} alt="GP Logo" className="w-24 h-20 bg-background rounded-lg" />
          </div>
          <CardTitle className="text-gradient">
            Giulia & Paweł Wedding Gallery
          </CardTitle>
          <CardDescription>
            Enter the access code to live it all over again!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter access code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError("");
                }}
                className="text-center"
                autoFocus
              />
              {error && (
                <p className="text-destructive text-sm mt-2 text-center">{error}</p>
              )}
            </div>
            <Button type="submit" className="w-full text-white">
              Access Gallery
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeEntry;