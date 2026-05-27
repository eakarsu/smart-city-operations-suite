export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "urban-planning-zoning-simulator",
    "label": "Urban Planning Zoning Simulator",
    "description": "Open Urban Planning Zoning Simulator workflows elevated from AIUrbanPlanningZoningSimulator.",
    "href": "/zoning-simulation",
    "sourceProjects": [
      "AIUrbanPlanningZoningSimulator"
    ],
    "examples": [
      "Zoning Simulation",
      "Urban Plan Scenarios",
      "Planning Impact Review"
    ],
    "count": 1
  },
  {
    "id": "smart-city-traffic-signal",
    "label": "Smart City Traffic Signal",
    "description": "Open Smart City Traffic Signal workflows elevated from AISmartCityTrafficSignal.",
    "href": "/traffic-signal-optimization",
    "sourceProjects": [
      "AISmartCityTrafficSignal"
    ],
    "examples": [
      "Traffic Signal Optimization",
      "Intersection Delay Review",
      "Mobility Impact Plan"
    ],
    "count": 1
  }
];
