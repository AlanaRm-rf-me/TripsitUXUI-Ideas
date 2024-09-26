'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/app/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/app/ui/sheet"
import { Menu, Settings, Mic, HelpCircle } from "lucide-react"

export function TechConnectHome() {
  const [showSettings, setShowSettings] = useState(false)
  const [terminalText, setTerminalText] = useState('')

  const navItems = ["Home", "About", "Resources", "Guides", "Volunteer", "FAQ", "Updates"]

  useEffect(() => {
    const text = `
> Initializing TECH/CONNECT...
> Establishing secure connection...
> Scanning network for vulnerabilities...
> Accessing mainframe...
> Decrypting data packets...
> Bypassing firewall...
> Connecting to global servers...
> Synchronizing databases...
> Loading user profiles...
> System online. Welcome to TECH/CONNECT.
    `.trim()

    let i = 0
    const intervalId = setInterval(() => {
      setTerminalText(text.slice(0, i))
      i++
      if (i > text.length) {
        i = 0
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Animated Terminal Background */}
      <div className="absolute inset-0 overflow-hidden">
        <pre className="text-green-500 opacity-20 text-sm whitespace-pre-wrap break-all animate-scroll backdrop-blur-sm">
          {terminalText.repeat(20)}
        </pre>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-black/30 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-10">
        <div className="text-2xl font-bold text-white">MOON<span className="text-blue-500">/</span>BEAR</div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">Join Community</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors ml-2">God help me</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900/80 backdrop-blur-lg border-l border-gray-800/50">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a key={item} href="#" className="text-gray-300 hover:text-white text-lg transition-colors">{item}</a>
                ))}
                <Button className="bg-purple-600 hover:bg-purple-700 transition-colors mt-4">Join Community</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 transition-colors mt-2">Start Chat</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
              moon<span className="text-white">/</span>bear's asylum
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            DRIVING PYTHON DEVELOPERS INSANE SINCE THE FINDING OF 0 == '0' AND 0 === '0'
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all transform hover:scale-105 shadow-lg">
            Connect with an Expert
          </Button>
        </div>
      </main>

      {/* Settings Button */}
      <button 
        onClick={() => setShowSettings(!showSettings)}
        className="fixed bottom-4 right-4 bg-gray-800/50 backdrop-blur-md p-2 rounded-full transition-colors hover:bg-gray-700/50"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed bottom-16 right-4 bg-gray-800/80 backdrop-blur-lg p-4 rounded-lg shadow-lg border border-gray-700/50">
          <Button variant="ghost" className="mr-2" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" className="mr-2" size="icon">
            <Mic className="h-4 w-4" />
            <span className="sr-only">Microphone</span>
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-4 w-4" />
            <span className="sr-only">Help</span>
          </Button>
        </div>
      )}
    </div>
  )
}