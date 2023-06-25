## Shipments API

```typescript
const shipmentPayload = {
  address_from: 'AD-1234567890',
  address_to: 'AD-01234567890',
  parcel: 'PC-01234567890',
  shipment_purpose: 'personal',
};
```
```typescript
const quickShipmentPayload = {
  pickup_address: {
    first_name: 'Terminal',
    last_name: 'Africa',
    email: 'example@exmaple.com',
    phone: '+2348123456789',
    is_residential: true,
    line1: 'Terminal Africa HQ',
    line2: '',
    city: 'Surulere',
    state: 'Lagos',
    country: 'NG',
    zip: '100001',
  },
  delivery_address: {
    first_name: 'Terminal',
    last_name: 'Africa',
    email: 'example@example.com',
    phone: '+2348123456789',
    is_residential: true,
    line1: 'Terminal Africa HQ',
    line2: 'Alausa',
    city: 'Ikeja',
    state: 'Lagos',
    country: 'NG',
    zip: '100001',
  },
  parcel: {
    description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
    weight_unit: 'kg',
    items: [
      {
        description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
        name: '0% off on Offer on deals',
        currency: 'NGN',
        value: 500,
        quantity: 1,
        weight: 2,
      },
    ],
    metadata: {},
  },
};
```

## Create Shipment
```typescript
const shipment: any = await TerminalAfrica.createShipment(shipmentPayload);
```

## Create Quick Shipment
```typescript
const shipment: any = await TerminalAfrica.createQuickShipment(quickShipmentPayload);
```

## Update Shipment
```typescript
const shipmentId = 'SH-1234567890'
const update: any = await TerminalAfrica.updateShipment(shipmentId, shipment_data);
```

## Get Shipments
```typescript
const queryParams = `?page=1&perPage=1&status=draft`;
const shipments: any = await TerminalAfrica.getShipments(queryParams);
```

## Get Shipment
```typescript
const shipmentId = 'SH-1234567890'
const shipment: any = await TerminalAfrica.getShipment(shipmentId);
```

## Track Shipment
```typescript
const shipmentId = 'SH-1234567890'
const shipment: any = await TerminalAfrica.trackShipment(shipmentId);
```

## Cancel Shipment
```typescript
const shipmentId = 'SH-1234567890'
const shipment: any = await TerminalAfrica.cancelShipment(shipmentId);
```

## Delete Shipment
```typescript
const shipmentId = 'SH-1234567890'
const shipment: any = await TerminalAfrica.deleteShipment(shipmentId);
```

## Duplicate Shipment
```typescript
const shipmentId = 'SH-1234567890'
const shipment: any = await TerminalAfrica.duplicateShipment(shipmentId);
```

## Arrange Pickup and Delivery
To Purchase Insuarance for a pickup, include `purchase_insurance: true` in your request payload

If rate generated if a cash on delivery rate, include `cash_to_collect: ${amount}` to your request payload

#### Arrange Pickup with only rate id
```typescript
let pickupPayload = {
    rate_id: "RT-1234567890"
}
```
```typescript
const pickup: any = await TerminalAfrica.arrangePickup(pickupPayload);
```

#### Arrange Pickup with rate id and shipment id
```typescript
let pickupPayload = {
    rate_id: "RT-1234567890",
    shipment_id: "SH-12345678900"
}
```
```typescript
const pickup: any = await TerminalAfrica.arrangePickup(pickupPayload);
```
