import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import GettingStarted from './components/GettingStarted';
import EarlyAdopters from './components/EarlyAdopters';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <GettingStarted />
        <EarlyAdopters />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;