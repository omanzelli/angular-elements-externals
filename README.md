## The project
This project was create for testing the usage of externals with Angular Elements.

The angular element `CustomComponent` is lazy loaded using [angular elements extensions](https://angular-extensions.github.io/elements).

For building it use the `build-element` npm script. The element's `main.js` will be copied to the `test-app` assets folder.

The `ElementContainerComponent` is created dynamically and then added to the DOM - check `loadElement(id: number, name: string)` function inside `app.component.ts` of `test-app` project.


For building the library use the `build-services` npm script.



## The issue
Building using `--extra-webpack-config webpack.externals.js` parameter, the CustomCompont is not properly loaded.

The error is the following
```
Uncaught NullInjectorError: StaticInjectorError(Platform: core)[CompilerFactory]: 
  NullInjectorError: No provider for CompilerFactory!
    at NullInjector.get (http://localhost:4200/assets/core/bundles/core.umd.js:1147:29)
    at resolveToken (http://localhost:4200/assets/core/bundles/core.umd.js:12336:28)
    at tryResolveToken (http://localhost:4200/assets/core/bundles/core.umd.js:12280:20)
    at StaticInjector.get (http://localhost:4200/assets/core/bundles/core.umd.js:12174:24)
    at compileNgModuleFactory__PRE_R3__ (http://localhost:4200/assets/core/bundles/core.umd.js:28622:40)
    at PlatformRef.bootstrapModule (http://localhost:4200/assets/core/bundles/core.umd.js:28864:20)
    at Module.zUnb (http://localhost:4200/assets/main.js:1:2512)
    at n (http://localhost:4200/assets/main.js:1:110)
    at Object.0 (http://localhost:4200/assets/main.js:1:943)
    at n (http://localhost:4200/assets/main.js:1:110)
```
