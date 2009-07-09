h1. NANO - jQuery Template Engine

h2. Basic Usage

Assuming you have following JSON response:

<pre>
user = {
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

you can make:

<code>
  $.nano("&lt;p&gt;Hello {user.first_name} {user.last_name}! Your account is &lt;strong&gt;{user.account.status}&lt;/strong&gt;&lt;/p&gt;", user)
</code>

<code>
  &lt;p&gt;Hello Thomas! Your account is &lt;strong&gt;active&lt;/strong&gt;&lt;/p&gt;
</code>

Simple huh?

h2. More Advanced Example

Displaying list of twitter search results (JSONP API):

<code>  
  var template = "&lt;li&gt;&lt;strong&gt;@{from_user}&lt;/strong&gt; {original_text}&lt;/li&gt;"
  var query = "beer OR vodka"
  var container = $("ul#tweets")
  
  $.getJSON("http://search.twitter.com/search.json?callback=?", {
      q: query
    }, function(data) {
      container.html("")
      $.each(data.results), function(i, item){
        container.append($.nano(template, item))
      }
    }
  }
</code>
  