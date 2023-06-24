## Packaging API

```typescript
const packagingPayload = {
  height: 10,
  name: 'My Standard Packaging',
  size_unit: 'cm',
  type: 'box',
  width: 20,
  weight: 1,
  weight_unit: 'kg',
  length: 11,
};
```
```typescript
const packagingId = 'PA-123456789';
```

## Create Packaging
```typescript
const packaging: any = await TerminalAfrica.createPackaging(packagingPayload);
```

## Update Packaging
```typescript
const update: any = await TerminalAfrica.updatePackaging(packagingId, packagingPayload);
```

## Get Packagings
```typescript
const queryParams = `?page=1&perPage=1&type=soft-packaging`;
const packaging: any = await TerminalAfrica.getPackagings(queryParams);
```

## Get Packaging
```typescript
const packaging: any = await TerminalAfrica.getPackaging(packagingId);
```

## Terminal Default Packaging
```typescript
const packaging: any = await TerminalAfrica.terminalDefaultPackaging();
```