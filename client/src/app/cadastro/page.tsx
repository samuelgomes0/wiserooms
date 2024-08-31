"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerSchema } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = () => {
    console.log("Teste");
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Link href={"/"} className="absolute top-8 left-8">
        <ArrowLeft size={24} />
      </Link>
      <Card className="max-w-sm">
        <CardHeader className="flex gap-2 flex-col text-center">
          <CardTitle className="text-2xl font-bold">Criar sua conta</CardTitle>
          <CardDescription className="text-neutral-500 text-sm">
            Preencha os campos para criar sua conta e começar a reservar
            espaços.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="name" className="font-semibold">
                Nome
              </Label>
              <Input type="name" id="name" placeholder="John Doe" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="email" className="font-semibold">
                E-mail
              </Label>
              <Input type="email" id="email" placeholder="email@exemplo.com" />
            </div>
            <div className="w-full relative flex flex-col gap-2">
              <Label htmlFor="password" className="font-semibold">
                Senha
              </Label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Sua senha"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-8 text-neutral-400"
              >
                {showPassword ? (
                  <EyeIcon size={20} />
                ) : (
                  <EyeOffIcon size={20} />
                )}
              </button>
            </div>
            <div className="w-full relative flex flex-col gap-2">
              <Label htmlFor="confirmPassword" className="font-semibold">
                Confirmar senha
              </Label>
              <Input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirmar sua senha"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-8 text-neutral-400"
              >
                {showPassword ? (
                  <EyeIcon size={20} />
                ) : (
                  <EyeOffIcon size={20} />
                )}
              </button>
            </div>
            <Button type="submit" className="mt-2">
              Criar conta
            </Button>
            <Label className="text-sm text-center">
              Já tem uma conta?{" "}
              <Link href="/entrar" className="font-bold">
                Entre agora
              </Link>
            </Label>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
