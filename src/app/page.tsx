'use client';
import router from "next/router";

export default function Home() {
  router.push('/home');
  return <h1>Home</h1>;
}
