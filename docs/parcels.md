## Parcels API

```typescript
const parcelData = {
  description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
  packaging: '',
  weight_unit: 'kg',
  items: [
        {
        description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
        name: '0% off on Offer on deals',
        currency: 'NGN',
        value: 20000,
        quantity: 1,
        weight: 10,
        },
  ],
  metadata: {customerId: 1},
};
```
```typescript
const parcelId = 'PC-123456789'
```

## Create Parcel
```typescript
const parcel: any = await TerminalAfrica.createParcel(parcelData);
```

## Update Parcel
```typescript
const update: any = await TerminalAfrica.updateParcel(parcelId, parcelData);
```

## Get Parcels
```typescript
const queryParams = `?page=1&perPage=1`;
const parcels: any = await TerminalAfrica.getParcels(queryParams);
```

## Get Parcel
```typescript
const parcel: any = await TerminalAfrica.getParcel(parcelId);
```