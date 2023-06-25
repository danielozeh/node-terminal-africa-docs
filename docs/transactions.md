## Transactions API

## Get Transactions
```typescript
const queryParams = `?page=1&perPage=1&wallet=${wallet}`;
const transactions: any = await TerminalAfrica.getTransactions(queryParams);
```

## Get Transaction
```typescript
const transactionId = 'TR-1234567890'
const transaction: any = await TerminalAfrica.getTransaction(transactionId);
```