## Insurance API

```typescript
const insuranceId = 'IN-1234567890';
```

## Get Insurance
```typescript
const insurance:any  = await TerminalAfrica.getInsurance(insuranceId);
```

## Get Insurance List
```typescript
const queryParams = `?page=1&perPage=1`;
const insurance: any = await TerminalAfrica.getInsuranceList(queryParams);
```

## Get Insurance Premium
```typescript
const queryParams = `?currency=NGN&parcel=${parcelId}`;
const insurance: any = await TerminalAfrica.getInsurancePremium(queryParams);
```

## Get Insurance Premium Using Parcel Value
```typescript
const insurancePayload = {
    currency: "NGN",
    parcel_value: 20000
}
const insurance: any = await TerminalAfrica.getInsurancePremiumUsingParcelValue(insurancePayload);
```

## Purchase Insurance
```typescript
const insurancePayload = {
    shipment: "SH-123456789",
}
const insurance: any = await TerminalAfrica.purchaseInsurance(insurancePayload);
```