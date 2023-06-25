## Webhook API

```typescript
const webhookPayload = {
    name: 'Test Webhook',
    events: ['shipment.created', 'transaction.success'],
    live: true,
    url: 'https://site.co',
};
```
```typescript
const webhookId = 'WA-1234567890';
```

## Create Webhook
```typescript
const webhook: any = await TerminalAfrica.createWebhook(webhookPayload);
```

## Delete Webhook
```typescript
const deleteWebhook: any = await TerminalAfrica.deleteWebhook(webhookId);
```

## Disable Webhook
```typescript
const disableWebhook: any = await TerminalAfrica.disableWebhook(webhookId);
```

## Enable Webhook
```typescript
const enable: any = await TerminalAfrica.enableWebhook(webhookId);
```

## Get Webhooks
```typescript
const queryParams = `?page=1&perPage=1`;
const webhooks: any = await TerminalAfrica.getWebhooks(queryParams);
```

## Get Webhook
```typescript
const webhook: any = await TerminalAfrica.getWebhook(webhookId);
```