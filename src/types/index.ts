import { ReactNode } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  highlight: string;
}

export interface UseCaseItem {
  icon: ReactNode;
  title: string;
  description: string;
  examples: string[];
  color: string;
  border: string;
  iconBg: string;
}

export interface RoadmapItem {
  icon: ReactNode;
  title: string;
  description: string;
  timeframe: string;
  status: string;
  color: string;
}