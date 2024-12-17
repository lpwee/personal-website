// Navigation
export interface NavigationBarProps {
  // Add props if needed in the future
}

// Form Types
export type EventType = 'MensOpen' | 'WomensOpen' | 'VeteransOpen' | 'YouthOpen' | 'DuosOpen' | 'TeamsOpen' | 'RelayOpen';

export interface FormData {
  termsAccepted: boolean;
  dataUsageAccepted: boolean;
  eventType: EventType | null;
  // Singles data
  participantName?: string;
  bloodType?: string;
  emergencyContact?: string;
  // Team data
  memberCount?: number;
  teamMembers?: {
    name: string;
    bloodType: string;
    emergencyContact: string;
  }[];
  // Payment data
  discountCode?: string;
  finalPrice?: number;
}
