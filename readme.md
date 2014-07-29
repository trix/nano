NANO - Template Engine
=============================

***Basic Usage***

Assuming you have following JSON response:

<pre>
data = {
  user: {
    login: "tomek",
    first_name: "Thomas",
    last_name: "Mazur",
    account: {
      status: "active",
      expires_at: "2009-12-31"
    },
    say: function(){
        return 'hello world';
    }
  }
}
</pre>

you can make:

<code>
  nano("&lt;p&gt;Hello {user.first_name} {user.last_name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt;&lt;/p&gt; say:{user.say()}", data)
</code>

and you get ready string:

<code>
  &lt;p&gt;Hello Thomas Mazur! Your account is &lt;strong&gt;active&lt;/strong&gt;&lt;/p&gt; say:hello world
</code>

Test page: <a href="testPage.html">testPage.html</a>

Simple huh?

***More Advanced Example***


Displaying list of twitter search results (JSONP API)

http://jsfiddle.net/UXZDy/86/
