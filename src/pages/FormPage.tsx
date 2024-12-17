import React, { useState } from 'react';
import { EventType, FormData } from '../types';

const FormPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    termsAccepted: false,
    dataUsageAccepted: false,
    eventType: null,
    teamMembers: []
  });

  const isSinglesEvent = (eventType: EventType | null): boolean => {
    return eventType === 'MensOpen' || eventType === 'WomensOpen' || 
           eventType === 'VeteransOpen' || eventType === 'YouthOpen';
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleEventSelection = (event: EventType) => {
    setFormData(prev => ({
      ...prev,
      eventType: event
    }));
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const newTeamMembers = [...(prev.teamMembers || [])];
      if (!newTeamMembers[index]) {
        newTeamMembers[index] = { name: '', bloodType: '', emergencyContact: '' };
      }
      newTeamMembers[index] = {
        ...newTeamMembers[index],
        [field]: value
      };
      return {
        ...prev,
        teamMembers: newTeamMembers
      };
    });
  };

  const handleMemberCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value);
    if (count >= 2 && count <= 5) {
      setFormData(prev => ({
        ...prev,
        memberCount: count,
        teamMembers: Array(count).fill({ name: '', bloodType: '', emergencyContact: '' })
      }));
    }
  };

  const handleNext = () => {
    if (step === 1 && formData.termsAccepted && formData.dataUsageAccepted) {
      setStep(2);
    }
  };

  const renderAgreements = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleCheckboxChange}
          className="h-4 w-4"
        />
        <label htmlFor="terms">
          By submitting this form, you agree to the terms and conditions (Mandatory)
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="dataUsage"
          name="dataUsageAccepted"
          checked={formData.dataUsageAccepted}
          onChange={handleCheckboxChange}
          className="h-4 w-4"
        />
        <label htmlFor="dataUsage">
          By submitting this form, you agree to our Personal Data Usage Policy (Mandatory)
        </label>
      </div>
      <button
        onClick={handleNext}
        disabled={!formData.termsAccepted || !formData.dataUsageAccepted}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );

  const renderEventSelection = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Which event are you looking to participate in?</h2>
      {[
        { id: 'MensOpen', label: "Men's Open" },
        { id: 'WomensOpen', label: "Women's Open" },
        { id: 'VeteransOpen', label: "Veteran's Open" },
        { id: 'YouthOpen', label: "Youth Open" },
        { id: 'DuosOpen', label: "Duo's Open" },
        { id: 'TeamsOpen', label: "Team's Open" },
        { id: 'RelayOpen', label: "Relay Open" }
      ].map(event => (
        <button
          key={event.id}
          onClick={() => handleEventSelection(event.id as EventType)}
          className="block w-full text-left px-4 py-2 border rounded hover:bg-gray-100"
        >
          {event.label}
        </button>
      ))}
    </div>
  );

  const renderSinglesForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Participant Details</h2>
      <div>
        <label className="block mb-2">Name of Participant:</label>
        <input
          type="text"
          name="participantName"
          value={formData.participantName || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Blood Type of Participant:</label>
        <input
          type="text"
          name="bloodType"
          value={formData.bloodType || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Emergency Contact:</label>
        <input
          type="text"
          name="emergencyContact"
          value={formData.emergencyContact || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
    </div>
  );

  const renderTeamForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Team Details</h2>
      <div>
        <label className="block mb-2">Number of members (2-5):</label>
        <input
          type="number"
          min="2"
          max="5"
          value={formData.memberCount || 2}
          onChange={handleMemberCountChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      {formData.teamMembers?.map((member, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-bold mb-2">Member {index + 1}</h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              value={member.name}
              onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Blood Type"
              value={member.bloodType}
              onChange={(e) => handleTeamMemberChange(index, 'bloodType', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Emergency Contact"
              value={member.emergencyContact}
              onChange={(e) => handleTeamMemberChange(index, 'emergencyContact', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderPaymentPreview = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Payment Preview</h2>
      <div>
        <label className="block mb-2">Discount Code:</label>
        <input
          type="text"
          name="discountCode"
          value={formData.discountCode || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="border p-4 rounded">
        <p className="font-bold">Final Price: ${formData.finalPrice || 0}</p>
      </div>
    </div>
  );

  const renderPaymentQR = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <div className="flex justify-center">
        {/* Replace with actual QR code image */}
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
          QR Code Placeholder
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {step === 1 && renderAgreements()}
        {step === 2 && renderEventSelection()}
        {step === 3 && formData.eventType && (
          isSinglesEvent(formData.eventType) ? renderSinglesForm() : renderTeamForm()
        )}
        {step === 4 && renderPaymentPreview()}
        {step === 5 && renderPaymentQR()}
      </div>
    </div>
  );
};

export default FormPage;
