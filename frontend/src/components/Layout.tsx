export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-black text-white flex-1 flex-col min-h-screen">
      {children}
    </div>
  );
}
