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
    }
  }
}
</pre>

you can do:

<code>
  nano("&lt;p&gt;Hello {user.first_name} {user.last_name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;", data)
</code>

and you get the following string:

<code>
  &lt;p&gt;Hello Thomas Mazur! Your account is &lt;strong&gt;active&lt;/strong&gt;&lt;/p&gt;
</code>

or you can do:

<code>
  nano("&lt;p&gt;Hello {user.first_name} {user.last_name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;", data, true)
</code>

and you get the following string:

<code>
  &lt;p&gt;Hello Thomas Mazur! Your account is &lt;strong&gt;active&lt;/strong&gt; {user.nonexistingnode}&lt;/p&gt;
</code>


The test page can be found here: <a href="testPage.html">testPage.html</a>
