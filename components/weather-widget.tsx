"use client"

import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react'

type WeatherData = {
  temperature: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy'
}

const mockFetchWeather = (): Promise<WeatherData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const conditions: WeatherData['condition'][] = ['sunny', 'cloudy', 'rainy', 'snowy']
      resolve({
        temperature: Math.floor(Math.random() * 30) + 10, // Random temperature between 10 and 40
        condition: conditions[Math.floor(Math.random() * conditions.length)]
      })
    }, 1000)
  })
}

const WeatherIcon = ({ condition }: { condition: WeatherData['condition'] }) => {
  switch (condition) {
    case 'sunny':
      return <Sun className="h-6 w-6 text-yellow-400" />
    case 'cloudy':
      return <Cloud className="h-6 w-6 text-gray-400" />
    case 'rainy':
      return <CloudRain className="h-6 w-6 text-blue-400" />
    case 'snowy':
      return <Snowflake className="h-6 w-6 text-blue-200" />
  }
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await mockFetchWeather()
        setWeather(data)
      } catch (error) {
        console.error('Failed to fetch weather data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  if (loading) {
    return <div className="text-sm">Loading weather...</div>
  }

  if (!weather) {
    return <div className="text-sm">Weather unavailable</div>
  }

  return (
    <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
      <WeatherIcon condition={weather.condition} />
      <span className="text-sm font-medium">
        {weather.temperature}°C
      </span>
    </div>
  )
}

