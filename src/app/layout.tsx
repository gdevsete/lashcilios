import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lash Cílios Cursos | Formando Profissionais Desde 2018",
  description:
    "Aprenda extensão de cílios com as melhores técnicas do mercado. Fio a fio, Volume Russo, Mega Volume. Certificado reconhecido. +5.000 alunas formadas.",
  keywords: [
    "curso de cílios",
    "extensão de cílios",
    "volume russo",
    "fio a fio",
    "curso lash",
    "designer de cílios",
  ],
  openGraph: {
    title: "Lash Cílios Cursos | Formando Profissionais Desde 2018",
    description:
      "Transforme sua paixão em profissão lucrativa. Aprenda extensão de cílios e comece a faturar R$3.000 a R$10.000/mês.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
