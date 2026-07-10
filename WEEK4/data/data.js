// Declare a variable Oyeradata
const data = {
  fruits: ['apple', 'banana', 'orange', 'pear'],
  numbers: [1, 2, 3, 4],
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ],
  flags: [true, false, true]
  ,
  videoCall: {
    id: 'vc-123',
    topic: 'Team Sync',
    hostId: 1,
    participants: [
      { id: 1, name: 'Alice', role: 'host' },
      { id: 2, name: 'Bob', role: 'participant' }
    ],
    startTime: '2026-07-06T10:00:00Z',
    endTime: null,
    status: 'ongoing', // 'scheduled' | 'ongoing' | 'ended'
    settings: {
      muteOnJoin: true,
      videoEnabled: true,
      recording: false,
      screenShare: false
    },
    chat: [
      { senderId: 1, message: 'Welcome to the call!', time: '2026-07-06T10:01:00Z' }
    ],
    metadata: {
      platform: 'webrtc',
      link: 'https://meet.example/vc-123'
    }
  }
  ,
  mobileMoney: {
    provider: 'MobiPay',
    transactionId: 'mm-789',
    sender: { id: 2, name: 'Bob', phone: '+254700000002' },
    receiver: { id: 99, name: 'Vendor', phone: '+254700000100' },
    amount: 2500.00,
    currency: 'KES',
    fees: 25.00,
    total: 2525.00,
    status: 'completed',
    timestamp: '2026-07-06T09:45:00Z',
    balanceBefore: 10000.00,
    balanceAfter: 7475.00,
    method: 'wallet',
    reference: 'INV-20260706-001',
    metadata: {
      location: 'Nairobi',
      note: 'Payment for goods'
    }
  }
};

export default data;
