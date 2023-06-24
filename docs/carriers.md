## Carriers API

```typescript
const carrierId = 'CA-123456789';
```

## Get Carriers
```typescript
const queryParams = `?page=1&perPage=10`;
const carriers: any = await TerminalAfrica.getCarriers(queryParams);
```

## Get Carrier
```typescript
const carrier: any = await TerminalAfrica.getCarrier(carrierId);
```

## Enable Carrier
```typescript
const queryParams = '?domestic=true&regional=true&international=true';
const carrier: any = await TerminalAfrica.enableCarrier(carrierId, queryParams);
```

## Disable Carrier
```typescript
const queryParams = '?domestic=true&regional=true&international=true';
const carrier: any = await TerminalAfrica.disableCarrier(carrierId, queryParams);
```

## Enable Multiple Carriers
```typescript
const carriers_to_enable = {
    carriers: [
        {
            carrier_id: carrierId,
            domestic: true,
            regional: true,
            international: true,
        },
    ],
  };
const carrier: any = await TerminalAfrica.enableMultipleCarrier(carriers_to_enable);
```

## Disable Multiple Carriers
```typescript
const carriers_to_disable = {
    carriers: [
        {
            carrier_id: carrierId,
            domestic: true,
            regional: true,
            international: true,
        },
    ],
  };
const carrier: any = await TerminalAfrica.disableMultipleCarrier(carriers_to_disable);
```