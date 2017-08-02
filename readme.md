NANO - Template Engine
=============================

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b709fa6c872242faa6c84e12c9f8d298)](https://www.codacy.com/app/azettl/nano?utm_source=github.com&utm_medium=referral&utm_content=azettl/nano&utm_campaign=badger)

## nano()

The *nano()* method replaces text like {user.lastname} with data from an JSON object like {user: {lastname: 'demo'}}.

## Installation
<pre>bower install js-nano-template</pre>

**Syntax**

<pre>nano(t, d[, u])</pre>


**Parameters**

  *t* (string)   
  The template string in which the replacement should happen.

  *d* (object)   
  The JSON object.

  *u* (boolean)  
  Optional. Whether strings which can't be replaced should be shown.



  **Syntax**

  <pre>nanoExternal(t, d[, u, e])</pre>


  **Parameters**

  *t* (string)   
  The template url in which the replacement should happen.

  *d* (object)   
  The JSON object.

  *u* (boolean)  
  Optional. Whether strings which can't be replaced should be shown.

  *e* (object)  
  Optional. dom element, if a dom element is provided the replaced text will be loaded in that instead of returned.


## Examples

Assuming you have following JSON response:

```json
data = {
  user: {
    login: "demo",
    first_name: "Anon",
    "last name": "Ymous",
    account: {
      status: "active",
      expires_at: "2016-12-31"
    },
    greeting: function(){
      return 'Hello';
    }
  }
}
```

you can do:

```javascript
  nano("&lt;p&gt;{user.greeting()} {user.first_name} {user.last name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;", data)
```

and you get the following string:

```javascript
  &lt;p&gt;Hello Anon Ymous! Your account is &lt;strong&gt;active&lt;/strong&gt; &lt;/p&gt;
```

or you can do:

```javascript
  nano("&lt;p&gt;{user.greeting()} {user.first_name} {user.last name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;", data, true)
```

and you get the following string:

```javascript
  &lt;p&gt;Hello Anon Ymous! Your account is &lt;strong&gt;active&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;
```

You can now also load an external template via nanoExternal('test.template.html', data, true);
The parameters are the same except that the first parameter requires an url.

```javascript
  nanoExternal('test.template.html', data, true)
```

or you pass the optional dom node and the replaced text will be directly loaded into that node.

```javascript
  nanoExternal('test.template.html', data, true, document.getElementById('myId'))
```

The test page can be found here: <a href="test.html">test.html</a>
