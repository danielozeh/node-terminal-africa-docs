## Locations API
This allows you work with Terminal Africa Location Services

## Get Countries
This allows you get the list of countries supoorted by Terminal Africa

```javascript
const countries: any = await TerminalAfrica.countries();
```

## Get States
This retrieves the list of states in a country
```javascript
const states: any = await TerminalAfrica.states('NG');
```

## Get Cities

### Get cities in a country
```javascript
const cities: any = await TerminalAfrica.cities('NG');
```

### Get cities in a state
```javascript
const cities: any = await TerminalAfrica.cities('NG', 'Lagos');
```