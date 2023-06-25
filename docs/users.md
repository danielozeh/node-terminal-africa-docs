## Users API

```typescript
const userId = 'USER-1234567890';
```

## Get User
```typescript
const user: any = await TerminalAfrica.getUser(userId);
```

## Get Wallet Info
```typescript
const wallet: any = await TerminalAfrica.walletInfo(userId);
```

## Get Wallet Balance
```typescript
const wallet: any = await TerminalAfrica.walletBalance(userId);
```

## Get User Carriers
```typescript
const carriers: any = await TerminalAfrica.carriers();
```