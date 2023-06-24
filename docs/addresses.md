## Addresses API
This allows you to manage your addresses with Terminal Africa

### Sample Payload
```typescript
const addressPayload = {
    first_name: 'Terminal',
    last_name: 'Africa',
    email: 'email@example.com',
    phone: '+2348123456789',
    is_residential: true,
    line1: '01, Terminal Africa HQ',
    line2: 'Alausa',
    metadata: {customerId: 1},
    city: 'Ikeja',
    state: 'Lagos',
    country: 'NG',
    zip: '100123',
}
```

## Create Address
```typescript
const address: any = await TerminalAfrica.createAddress(addressPayload);
```

## Update Address
```typescript
const addressId: any = 'AD-0123456789';
const address: any = await TerminalAfrica.updateAddress(addressId, addressPayload);
```

## Get Addresses
#### Request
```typescript
const queryParams = `?page=1&perPage=10`;
const addresses: any = await TerminalAfrica.getAddresses(queryParams);
```
<!-- #### Response
```typescript
{
    "status": true,
    "message": "My Addresses",
    "data": {
        "addresses": [
            {
                "user": "USER-12345678",
                "city": "Ikeja",
                "coordinates": {
                    "lat": "6.123456",
                    "lng": "3.0922443"
                },
                "country": "NG",
                "email": "email@example.com",
                "first_name": "Terminal",
                "is_residential": true,
                "last_name": "Africa",
                "line1": "045 Terminal HQ",
                "line2": "",
                "phone": "+2348123456789",
                "state": "Lagos",
                "zip": "100123",
                "address_id": "AD-0000000000",
                "created_at": "2022-04-26T10:08:31.393Z",
                "updated_at": "2022-04-26T10:08:31.393Z"
            }
        ],
        "pagination": {
            "page": 1,
            "limit": 25,
            "prevPage": null,
            "nextPage": null,
            "totalDocs": 3,
            "totalPages": 1,
            "pagingCounter": 1,
            "hasPrevPage": false,
            "hasNextPage": false
        }
    }
}
``` -->

## Get Address
```typescript
const addressId = 'AD-12345678'
const address: any = await TerminalAfrica.getAddress(addressId);
```

## Validate Address
```typescript
const address: any = await TerminalAfrica.validateAddress(addressPayload);
```

## Set Default Sender Address
```typescript
const addressId = 'AD-123456789'
const addressData: {
    address_id: addressId
}
const address: any = await TerminalAfrica.setDefaultSenderAddress(addressData);
```

## Get Sender Default Address
```typescript
const address: any = await TerminalAfrica.getDefaultSenderAddress();
```