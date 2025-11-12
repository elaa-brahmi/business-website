import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Globe, Code2, Cloud } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Web Development */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Code2 className="text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">Web Development</CardTitle>
            <CardDescription>Next.js • Spring Boot • Firebase</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground">
          We craft scalable, high-performance websites and web apps using
          modern frameworks that empower businesses to grow online.
        </CardContent>
      </Card>

      {/* UI/UX Design */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="absolute bg-gradient-to-tr from-primary/30 to-blue-500/30 -top-12 rounded-full w-24 h-24 flex justify-center items-center">
            <Globe className="text-primary w-10 h-10" />
          </div>
          <CardTitle className="text-center">UI / UX Design</CardTitle>
          <CardDescription className="font-normal text-primary">
            Figma • Tailwind CSS
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2 text-muted-foreground">
          <p>
            Clean, intuitive, and responsive designs that ensure seamless
            user experiences across all devices.
          </p>
        </CardContent>

        <CardFooter>
          <Button
            size="sm"
            variant="outline"
            className="text-sm font-medium"
          >
            Explore Designs
          </Button>
        </CardFooter>
      </Card>

      {/* E-Commerce Solutions */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 mt-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            E-Commerce Solutions
            <Badge variant="secondary" className="text-sm text-primary">
              Popular
            </Badge>
          </CardTitle>
          <CardDescription>
            Build secure online stores integrated with Stripe & Firebase.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Your Store</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4 text-sm">
            {[
              "Custom checkout & payments",
              "Stripe integration",
              "Inventory dashboard",
            ].map((benefit) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Cloud & DevOps */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 mt-6">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <Cloud className="text-primary w-6 h-6" />
          </div>
          <div>
            <CardTitle>Cloud & DevOps</CardTitle>
            <CardDescription className="text-md mt-2 text-muted-foreground">
              Deploy faster with AWS, Docker, and CI/CD pipelines ensuring
              reliability and scalability for every NovaTech project.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
