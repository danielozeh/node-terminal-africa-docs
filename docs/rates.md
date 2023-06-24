## Rates API

```typescript
const pickupAddressId: string = 'AD-123456789';
```
```typescript
const deliveryAddressId: string = 'AD-0123456789';
```
```typescript
const parcelId: string = 'PC-1234567890';
```
```typescript
const shipmentId: string = 'SH-123456789';
```

```typescript
const addressPayload = {
    first_name: 'Terminal',
    last_name: 'Africa',
    email: 'example@example.com',
    phone: '++2348123456789',
    is_residential: true,
    line1: 'Terminal Africa HQ',
    line2: '',
    city: 'Ikeja',
    state: 'Lagos',
    country: 'NG',
    zip: '100123',
};
```

```typescript
const parcelPayload = {
  description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
  packaging: '',
  weight_unit: 'kg',
  items: [
    {
        description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
        name: '0% off on Offer on deals',
        currency: 'NGN',
        value: 50000,
        quantity: 1,
        weight: 10,
    },
  ],
  metadata: {},
};
```

## Get Rates for shipment
### Using PickupAddress, DeliveryAddress and Parcel
To Fetch rates for carriers that supports `cash_on_delivery` rates, include `cash_on_delivery=true`
```typescript
const queryParams = `?pickup_address=${pickupAddressId}&delivery_address=${deliveryAddressId}&parcel_id=${parcelId}`;
const rates: any = await TerminalAfrica.getShipmentRates(queryParams);
```

### Using Shipment ID
```typescript
const queryParams = `?shipment_id=${shipmentId}`;
const rates: any = await TerminalAfrica.getShipmentRates(queryParams);
```

## Get Quotes for Shipment
```typescript
const quotesPayload = {
    pickup_address: addressPayload,
    delivery_address: addressPayload,
    parcel: parcelPayload,
};
const quotes: any = await TerminalAfrica.getQuotesForShipment(quotesPayload);
```

## Get Rates
```typescript
const queryParams = `?page=1&perPage=1`;
const rates: any = await TerminalAfrica.getRates(queryParams);
```

## Get Rate
```typescript
const rateId = 'RT-123456789'
const rate: any = await TerminalAfrica.getRate(rateId);
```