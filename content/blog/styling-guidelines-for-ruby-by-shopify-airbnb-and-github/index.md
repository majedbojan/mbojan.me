---
title: Styling guidelines for ruby by Shopify,Airbnb, and Github
date: "2020-08-10T22:12:03.284Z"
description: "The best guidelines style for ruby by Shopify and Airbnb"
---

<img src="./cover.gif" alt="Smiley face" width="700" height="350" style="text-align:center;vertical-align:middle;margin:50px 0px">

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> When </span> we come to the term of best practice or best guidance we properly follow the experts in that field. as a <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> developer, my experts are the seniors in big companies like Github, Airbnb, and Shopify who is using <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> as the main language and they're the largest companies for <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> out there.

Before we go to <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> syntax I would like to encourage you to use [RuboCop](https://github.com/rubocop-hq/rubocop). the most recommended tool for <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> projects. it helps you adopt the best practice for <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> styling. To know how to install and use RuboCop please refer to *[RuboCop's official documentation.](https://docs.rubocop.org/rubocop/)*


<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Bring your </span> <span style='font-size:50px;'>&#9749;</span> <span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> and let's start </span>

## General Coding Style
<dl>
  <dt><span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span></dt>
  <dd>1) Use soft-tabs with a two space indent.</dd>
  <dd>2) Keep lines fewer than 80 characters.</dd>
  <dd>3) Never leave trailing whitespace.</dd>
  <dd>4) End each file with a blank newline.</dd>
  <dd>5) Use spaces around operators, after commas, colons and semicolons, around { and before }.</dd>

  <dt><span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span></dt>
  <dd>1) Make all lines of your methods operate on the same level of abstraction. (Single Level of Abstraction Principle)</dd>

<dd>2) Code in a functional way. Avoid mutation (side effects) when you can.</dd>

<dd>3) Do not program defensively. <a href="http://www.erlang.se/doc/programming_rules.shtml#HDR11" target="_top">see</a></dd>

<dd>4) Do not mutate arguments unless that is the purpose of the method.</dd>
<dd>5) Do not mess around in / monkeypatch core classes when writing libraries.</dd>
<dd>6) Keep the code simple.</dd>
<dd>7) Don't overdesign.</dd>
<dd>8) Don't underdesign.</dd>
<dd>9) Avoid bugs.</dd>
<dd>10) Be consistent.</dd>
<dd>11) Use common sense.</dd>
</dl>

<dt><span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span></dt>
Nothing <span style='font-size:30px;'>&#9997; </span> from *Airbnb*

## Syntax
<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>

- Use :: only to reference constants (this includes classes and modules) and constructors (like Array() or Nokogiri::HTML()). Do not use :: for regular method invocation.
- Avoid using :: for defining class and modules, or for inheritance, since constant lookup will not search in parent classes/modules.

```ruby
# bad
module A
  FOO = 'test'
end

class A::B
  puts FOO  # this will raise a NameError exception
end

# good
module A
  FOO = 'test'

  class B
    puts FOO
  end
end
```
- Use def with parentheses when there are parameters. Omit the parentheses when the method doesn't accept any parameters.
- Never use for, unless you know exactly why.
- Never use then.
- Favour the ternary operator(?:) over if/then/else/end constructs.

```ruby
# bad
result = if some_condition then something else something_else end

# good
result = some_condition ? something : something_else
```
- Use one expression per branch in a ternary operator. This also means that ternary operators must not be nested. Prefer if/else constructs in these cases.
- Use when x then ... for one-line cases.
- Use ! instead of not.
- Prefer &&/|| over and/or. More info on and/or for control flow.
- Avoid multiline ?: (the ternary operator); use if/unless instead.
- Favour unless over if for negative conditions.
- Do not use unless with else. Rewrite these with the positive case first.
- Use parentheses around the arguments of method invocations. Omit parentheses when not providing arguments. Also omit parentheses when the invocation is single-line and the method:

```ruby
# bad
class User
  include(Bar)
  has_many(:posts)
end

# good
class User
  include Bar
  has_many :posts
  SomeClass.some_method(:foo)
end
```
- Avoid return where not required for control flow.
- Avoid `self` where not required (it is only required when calling a self write accessor).
- Use ||= to initialize variables only if they're not already initialized.
- Don't use ||= to initialize boolean variables (consider what would happen if the current value happened to be false).

```ruby
# bad - would set enabled to true even if it was false
@enabled ||= true

# good
@enabled = true if enabled.nil?

# also valid - defined? workaround
@enabled = true unless defined?(@enabled)
```
- Do not put a space between a method name and the opening parenthesis.
- Use the new lambda literal syntax.

```ruby
# bad
l = lambda { |a, b| a + b }
l.call(1, 2)

l = lambda do |a, b|
  tmp = a * 7
  tmp * b / 50
end

# good
l = ->(a, b) { a + b }
l.call(1, 2)

l = ->(a, b) do
  tmp = a * 7
  tmp * b / 50
end

```

- Prefer proc over Proc.new
<img src="smiley.gif" alt="Smiley face" width="42" height="42" style="vertical-align:middle;margin:50px 0px">

- Prefix with `_` unused block parameters and local variables. It's also acceptable to use just `_`.
```ruby
# bad
def compute_thing(thing)
  if thing[:foo]
    update_with_bar(thing)
    if thing[:foo][:bar]
      partial_compute(thing)
    else
      re_compute(thing)
    end
  end
end

# good
def compute_thing(thing)
  return unless thing[:foo]
  update_with_bar(thing[:foo])
  return re_compute(thing) unless thing[:foo][:bar]
  partial_compute(thing)
end
```

- Avoid hashes-as-optional-parameters in general. Does the method do too much?
- Prefer keyword arguments over options hash.
- Prefer map over `collect`, `find` over `detect`, `select` over `find_all`, `size` over `length`.
- Prefer `Time` over `DateTime` since it supports proper time zones instead of UTC offsets [ More info](https://gist.github.com/pixeltrix/e2298822dd89d854444b).

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>


- Use def with parentheses when there are arguments. Omit the parentheses when the method doesn't accept any arguments.

```ruby
  def some_method
      # body omitted
  end

  def some_method_with_arguments(arg1, arg2)
      # body omitted
  end
```

- Never use `for`, unless you know exactly why. Most of the time iterators should be used instead. `for` is implemented in terms of `each` (so you're adding a level of indirection), but with a twist - `for` doesn't introduce a new scope (unlike each) and variables defined in its block will be visible outside it.

```ruby
  arr = [1, 2, 3]

  # bad
  for elem in arr do
    puts elem
  end

  # good
  arr.each { |elem| puts elem }

```
- Never use then for multi-line if/unless.
```ruby
# bad
if some_condition then
  # body omitted
end

# good
if some_condition
  # body omitted
end
```
- Avoid the ternary operator (`?:`) except in cases where all expressions are extremely trivial. However, do use the ternary operator(`?:`) over if/then/else/end constructs for single line conditionals

```ruby
  # bad
  result = if some_condition then something else something_else end

  # good
  result = some_condition ? something : something_else
```

- Use one expression per branch in a ternary operator. This also means that ternary operators must not be nested. Prefer `if/else` constructs in these cases.

```ruby
  # bad
  some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

  # good
  if some_condition
    nested_condition ? nested_something : nested_something_else
  else
    something_else
  end
```
- The `and` and `or` keywords are banned. It's just not worth it. Always use `&&` and `||` instead.
- Avoid multi-line `?:` (the ternary operator), use `if/unless` instead.
- Favor modifier `if/unless` usage when you have a single-line body.
```ruby
  # bad
  if some_condition
    do_something
  end

  # good
  do_something if some_condition
```
- Never use `unless` with `else`. Rewrite these with the positive case first

```ruby
# bad
unless success?
  puts "failure"
else
  puts "success"
end

# good
if success?
  puts "success"
else
  puts "failure"
end
```
- Don't use parentheses around the condition of an `if/unless/while`.
```ruby
# bad
if (x > 10)
  # body omitted
end

# good
if x > 10
  # body omitted
end
```
Prefer `{...}` over `do...end` for single-line blocks. Avoid using `{...}` for multi-line blocks (multiline chaining is always ugly). Always use `do...end` for "control flow" and "method definitions" (e.g. in Rakefiles and certain DSLs). Avoid do...end when chaining.

```ruby
  names = ["Bozhidar", "Steve", "Sarah"]

  # good
  names.each { |name| puts name }

  # bad
  names.each do |name|
    puts name
  end

  # good
  names.select { |name| name.start_with?("S") }.map { |name| name.upcase }

  # bad
  names.select do |name|
    name.start_with?("S")
  end.map { |name| name.upcase }

```
Some will argue that multiline chaining would look OK with the use of {...}, but they should ask themselves - is this code really readable and can't the block's contents be extracted into nifty methods?

- Avoid return where not required.

```ruby
# bad
def some_method(some_arr)
  return some_arr.size
end

# good
def some_method(some_arr)
  some_arr.size
end
```
- Use spaces around the `=` operator when assigning default values to method parameters:

```ruby
# bad
def some_method(arg1=:default, arg2=nil, arg3=[])
  # do something...
end

# good
def some_method(arg1 = :default, arg2 = nil, arg3 = [])
  # do something...
end

```
While several Ruby books suggest the first style, the second is much more prominent in practice (and arguably a bit more readable).

- Use ||= freely to initialize variables.
```ruby
# set name to Bozhidar, only if it's nil or false
name ||= "Bozhidar"
```
- Don't use `||=` to initialize boolean variables. (Consider what would happen if the current value happened to be `false`.)

```ruby
  # bad - would set enabled to true even if it was false
  enabled ||= true

  # good
  enabled = true if enabled.nil?

```
- Never put a space between a method name and the opening parenthesis

```ruby
# bad
f (3 + 2) + 1

# good
f(3 + 2) + 1
```
<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>

- Never use `for`, unless you know exactly why. Most of the time iterators should be used instead. `for` is implemented in terms of `each` (so you're adding a level of indirection), but with a twist - for doesn't introduce a new scope (unlike `each`) and variables defined in its block will be visible outside it.[link]

```ruby
arr = [1, 2, 3]

# bad
for elem in arr do
  puts elem
end

# good
arr.each { |elem| puts elem }

```

Prefer `{...}` over `do...end` for single-line blocks. Avoid using {...} for multi-line blocks (multiline chaining is always ugly). Always use `do...end` for "control flow" and "method definitions" (e.g. in Rakefiles and certain DSLs). Avoid `do...end` when chaining.
```ruby
names = ["Bozhidar", "Steve", "Sarah"]

# good
names.each { |name| puts name }

# bad
names.each do |name| puts name end

# good
names.each do |name|
  puts name
  puts 'yay!'
end

# bad
names.each { |name|
  puts name
  puts 'yay!'
}

# good
names.select { |name| name.start_with?("S") }.map { |name| name.upcase }

# bad
names.select do |name|
  name.start_with?("S")
end.map { |name| name.upcase }
```

Some will argue that multiline chaining would look okay with the use of `{...}`, but they should ask themselves if this code is really readable and whether the block's content can be extracted into nifty methods.
- Use shorthand self assignment operators whenever applicable.
```ruby
# bad
x = x + y
x = x * y
x = x**y
x = x / y
x = x || y
x = x && y

# good
x += y
x *= y
x **= y
x /= y
x ||= y
x &&= y
```

- Avoid semicolons except for in single line class definitions. When it is appropriate to use a semicolon, it should be directly adjacent to the statement it terminates: there should be no space before the semicolon.

```ruby
# bad
puts 'foobar'; # superfluous semicolon
puts 'foo'; puts 'bar' # two expressions on the same line

# good
puts 'foobar'

puts 'foo'
puts 'bar'

puts 'foo', 'bar' # this applies to puts in particular
```

- Use `::` only to reference constants(this includes classes and modules) and constructors (like Array() or Nokogiri::HTML()). Do not use :: for regular method invocation.

```ruby
# bad
SomeClass::some_method
some_object::some_method

# good
SomeClass.some_method
some_object.some_method
SomeModule::SomeClass::SOME_CONST
SomeModule::SomeClass()
```

```ruby
# bad
def some_method(some_arr)
  return some_arr.size
end

# good
def some_method(some_arr)
  some_arr.size
end
```

- Avoid return where not required
```ruby
# bad
def some_method(some_arr)
  return some_arr.size
end

# good
def some_method(some_arr)
  some_arr.size
end
```
- Don't use the return value of `=` in conditionals

```ruby
# bad - shows intended use of assignment
if (v = array.grep(/foo/))
  ...
end

# bad
if v = array.grep(/foo/)
  ...
end

# good
v = array.grep(/foo/)
if v
  ...
end
```
- When defining an object of any mutable type meant to be a constant, make sure to call freeze on it. Common examples are strings, arrays, and hashes[More on this.](https://blog.honeybadger.io/when-to-use-freeze-and-frozen-in-ruby/)

The reason is that Ruby constants are actually mutable. Calling `freeze` ensures they are not mutated and are therefore truly constant and attempting to modify them will raise an exception. For strings, this allows older versions of Ruby below 2.2 to intern them.

```ruby
# bad
class Color
  RED = 'red'
  BLUE = 'blue'
  GREEN = 'green'

  ALL_COLORS = [
    RED,
    BLUE,
    GREEN,
  ]

  COLOR_TO_RGB = {
    RED => 0xFF0000,
    BLUE => 0x0000FF,
    GREEN => 0x00FF00,
  }
end

# good
class Color
  RED = 'red'.freeze
  BLUE = 'blue'.freeze
  GREEN = 'green'.freeze

  ALL_COLORS = [
    RED,
    BLUE,
    GREEN,
  ].freeze

  COLOR_TO_RGB = {
    RED => 0xFF0000,
    BLUE => 0x0000FF,
    GREEN => 0x00FF00,
  }.freeze
end

```
## References
- [ruby style guide from shopify](https://github.com/Shopify/ruby-style-guide)
- [ruby style guide from airbnb](https://github.com/airbnb/ruby)
- [ GitHub's guide](https://web.archive.org/web/20160410033955/https://github.com/styleguide/ruby)