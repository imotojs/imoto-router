# imoto-router
imoto's FE router

## Develop

```
$ make dev
$ make deploy
```

## Install

```
$ npm install --save imoto-router
// using UMD. require it to your program.
```

## Usage

```
Imoto.use(ImotoRouter);
let router = new Router(config);

router.map({
  '/index': IndexComponent,
  '/cart/:cartId': CartComponent,
  ...
});

router.redirect({
  '/': '/index'
});

router.start(AppComponent);
```

## API

continue...
