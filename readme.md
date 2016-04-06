NANO - Template Engine
=============================

***nano()***

The *nano()* method replaces text like {user.lastname} with data from an JSON object like {user: {lastname: 'demo'}}.

**Syntax**

<pre>nano(t, d[, u])</pre>


**Parameters**

  *t* (string)   
  The template / string in which the replacement should happen.

  *d* (object)   
  The JSON object.

  *u* (boolean)  
  Optional. Whether strings which can't be replaced should be shown.



***Examples***

Assuming you have following JSON response:

<pre>
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
</pre>

you can do:

<code>
  nano("&lt;p&gt;{user.greeting()} {user.first_name} {user.last name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;", data)
</code>

and you get the following string:

<code>
  &lt;p&gt;Hello Anon Ymous! Your account is &lt;strong&gt;active&lt;/strong&gt; &lt;/p&gt;
</code>

or you can do:

<code>
  nano("&lt;p&gt;{user.greeting()} {user.first_name} {user.last name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;", data, true)
</code>

and you get the following string:

<code>
  &lt;p&gt;Hello Anon Ymous! Your account is &lt;strong&gt;active&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;
</code>

You can now also load an external template via nanoExternal('test.template.html', data, true);
The parameters are the same except that the first parameter requires an url.

<code>
  nanoExternal('test.template.html', data, true)
</code>

The test page can be found here: <a href="test.html">test.html</a>
