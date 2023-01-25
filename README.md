# Symtend React

A React utility library.

## Contributing

```bash
# To install dependencies:
npm i

# To run tests:
npm t
# ...or:
npm run test

# To build:
npm run build
```

## Examples

```tsx
const registrationPhases: ["PERSONAL_DATA", "CONTACT_DATA", "VERIFICATION"] = [
  "PERSONAL_DATA",
  "CONTACT_DATA",
  "VERIFICATION",
];
const { phase, setNextPhase, setPreviousPhase } = usePhase(
  registrationPhases,
  0
);
```
