<p>
  <a href="#"><img src="https://vuejs.org/images/logo.png" width="70"></a>
  <h2>&lt;vue-template-plugin&gt;</h2>
</p>

<p>A template for create a Vue Plugin with Rollup</p>

<p>
    <a href="https://npmjs.com/package/vue-template-plugin"><img src="https://img.shields.io/npm/dt/vue-template-plugin.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-template-plugin/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-template-plugin/stargazers"><img src="https://img.shields.io/github/stars/coderdiaz/vue-template-plugin.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-template-plugin"><img src="https://img.shields.io/npm/v/vue-template-plugin.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-template-plugin"><img src="https://img.shields.io/npm/dm/vue-template-plugin.svg?style=flat-square"></a>
    <a href="https://travis-ci.org/coderdiaz/vue-template-plugin"><img src="https://travis-ci.org/coderdiaz/vue-template-plugin.svg?branch=master&style=flat-square"></a>
</p>

---

## Install/Usage
<!-- Replace the docs for usage the plugin -->
```sh
# Install with npm
$ npm i -S vue-template-plugin

# or yarn
$ yarn add vue-template-plugin
```

```html
<div id="app">
  <HelloWorld :message="message" />
</div>
```

You can use **Local Registration**:
```js
import { HelloWorld } from 'vue-template-plugin';
new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello World',
    };
  },
  components: {
    HelloWorld,
  },
});
```

or **Global Registration**:
```js
import HelloWorld from 'vue-template-plugin';
Vue.use(HelloWorld);

// or with a custom component name
import { HelloWorld } from 'vue-template-plugin';
Vue.component('custom-hello-world', HelloWorld);
```

### Usage in browser
<!-- Write an example for use the plugin in browser from CDN -->
In browser you can use Unpkg, Jsdelivr, CDN.js, etc.
```sh
# Unpkg
https://unpkg.com/vue-template-plugin@latest/dist/vue-template-plugin.js

# JSDelivr
https://cdn.jsdelivr.net/npm/vue-template-plugin@latest/dist/vue-template-plugin.min.js
```

## Documentation
<!-- Add all documentation about the plugin: props, events, etc -->
### Props
|Name|Description|Type|Required|
|---|---|---|---|
|message|The message property that will be displayed|String|false|

## Community
All feedback and suggestions are welcome!

## License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/vue-template-plugin/master/LICENSE)