## Claims API

## Get Claims
```typescript
const queryParams = `?page=1&perPage=1`;
const claims: any = await TerminalAfrica.getClaims(queryParams);
```

## Get Claim
```typescript
const claimId = ''
const claims: any = await TerminalAfrica.getClaim(claimId);
```

## File Claim
```typescript
const claimPayload = {
    description: 'Description of claim goes here',
    reason: 'Example reason for claim',
    signature: '', //base64 representation of signture of claimant
    witnesses: [
        [ 'Name of Witness 1', '+2348123456789' ],
        [ 'Name of witness 2', '+2347871222222' ]
    ]
}
const claims: any = await TerminalAfrica.fileClaim(claimPayload);
```