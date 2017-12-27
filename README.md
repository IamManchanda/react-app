# React App! CSS with ECSS approach!

- ECSS Based Project [organisation](http://ecss.io/chapter5.html#h-H2_0) and [naming](http://ecss.io/slides2/#/19) convention can be found in both `person` [folder](https://github.com/IamManchanda/react-app/tree/master/src/components/person) and also `cockpit` [folder](https://github.com/IamManchanda/react-app/tree/master/src/components/cockpit).
- You can also Checkout Scoping Approach in both `person` [folder](https://github.com/IamManchanda/react-app/tree/master/src/components/person) and also `cockpit` [folder](https://github.com/IamManchanda/react-app/tree/master/src/components/cockpit). Please note that both of these folders also includes ECSS Approach as mentioned above, so please look into [AppPerson.js](https://github.com/IamManchanda/react-app/blob/master/src/components/person/AppPerson.js#L22-L40) for an example on how to integrate them together.
- Please note that whatever you write in Machine Generated code (Scoped) will beat the Human Generated code aka #ECSS so scoping should be used as less as possible 😈. You should be only using scoped CSS when you somewhere need the power of JavaScript and are looking to load specific scoped css logically and dynamically!

## Special Note

- Foundation specific classes like `grid-x`, `cell`, `callout`, `button` doesn't have to do anything with ECSS based Classes. In real project, you should be using Foundation's Sass Mixin to insert them as ECSS classes.

- `app` is the namespace used in this example as far as naming convention of ECSS is concerned.

- If you ask me, I would only recommend using scoping for handling state changes. If you look into [SMACSS](https://smacss.com/book/type-state), Jonathan Snook recommends using `!important` for state changes but as we have scoping and the power of JavaScript, there is no need to use `important` to beat specificity instead we can just do something like:

```
<p className={'app-Person_Content ' + (this.state.isContentActive ? scoped.isContentActive : '')}>
```

## Install

```bash
npm install # or `yarn`
```

## Usage

### Development

```
npm run dev # or `yarn dev`
```

### Production

```
npm run prod # or `yarn prod`
```

### Testing 

```
npm run test #or `yarn test`
```
