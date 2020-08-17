---
title: Styling guidelines for ruby by Shopify,Airbnb, and Github
date: "2020-08-12T22:12:03.284Z"
description: "The best guidelines style for ruby suggested by big companies like Shopify, Airbnb, and Github"
---

<img src="./cover.gif" alt="Smiley face" width="700" height="350" style="text-align:center;vertical-align:middle;margin:50px 0px">

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> When </span> we come to the term of best practice or best guidance we properly follow the experts in that field. as a <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> developer, my experts are the seniors in big companies like [Github](https://github.com/github), [Airbnb](https://github.com/airbnb/), and [Shopify](https://github.com/Shopify/) who is using <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> as the main language and they're the largest companies for <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> out there.

Before we go to <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> styles I would like to encourage you to use [RuboCop](https://github.com/rubocop-hq/rubocop). the most recommended tool for <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> projects. it helps you to adopt the best practice for <span style="color: #9b111e; letter-spacing: 0.09em; font-size: 15px; font-weight: 600;"> Ruby </span> styling. To know how to install and use RuboCop please refer to *[RuboCop's official documentation.](https://docs.rubocop.org/rubocop/)*


<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Bring your </span> <span style='font-size:50px;'>&#9749;</span> <span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> and let's start </span>

# General Coding Style
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
Nothing <span style='font-size:30px;'>&#9997; </span> from Airbnb

# Syntax
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




# Naming
<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>
- Use snake_case for symbols, methods and variables.
- Use CamelCase for classes and modules (keep acronyms like HTTP, RFC, XML uppercase).
- Use snake_case for naming files and directories, e.g. hello_world.rb.
- Aim to have just a single class/module per source file. Name the file name as the class/module, but replacing CamelCase with snake_case.
- Use SCREAMING_SNAKE_CASE for other constants.
- When using inject with short blocks, name the arguments according to - what is being injected, e.g. |hash, e| (mnemonic: hash, element)
- When defining binary operators, name the parameter other(<< and [] are exceptions to the rule, since their semantics are different).
- The names of predicate methods (methods that return a boolean value) should end in a question mark (i.e. Array#empty?). Methods that don't return a boolean, shouldn't end in a question mark.
- Method names should not be prefixed with is_. E.g. prefer empty? over is_empty?.
- Avoid magic numbers. Use a constant and give it a useful name.
- Avoid nomenclature that has (or could be interpreted to have) discriminatory origins.

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>
- Use snake_case for methods and variables.
- Use CamelCase for classes and modules. (Keep acronyms like HTTP, RFC, XML uppercase.)
- Use SCREAMING_SNAKE_CASE for other constants.
- The names of predicate methods (methods that return a boolean value) should end in a question mark. (i.e. Array#empty?).
- The names of potentially "dangerous" methods (i.e. methods that modify self or the arguments, exit!, etc.) should end with an exclamation mark. Bang methods should only exist if a non-bang method exists. [More on this](https://web.archive.org/web/20160410033955/http://dablog.rubypal.com/2007/8/15/bang-methods-or-danger-will-rubyist).

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>
- Use snake_case for methods and variables.
- Use CamelCase for classes and modules. (Keep acronyms like HTTP, RFC, XML uppercase.)
- Use SCREAMING_SNAKE_CASE for other constants.
- The names of predicate methods (methods that return a boolean value) should end in a question mark. (i.e. Array#empty?)
- The names of potentially "dangerous" methods (i.e. methods that modify self or the arguments, exit!, etc.) should end with an exclamation mark. Bang methods should only exist if a non-bang method exists. [More on this](http://dablog.rubypal.com/2007/8/15/bang-methods-or-danger-will-rubyist)

- Name throwaway variables `_`

```ruby
version = '3.2.1'
major_version, minor_version, _ = version.split('.')
```


# Classes & Modules

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>
- Prefer modules to classes with only class methods. Classes should be used only when it makes sense to create instances out of them.

- Favour the use of `extend self` over `module_function` when you want to turn a module's instance methods into class methods.

```ruby
# bad
module SomeModule
  module_function

  def some_method
  end

  def some_other_method
  end
end

# good
module SomeModule
  extend self

  def some_method
  end

  def some_other_method
  end
end
```

- Use a `class << self` block over `def self`. when defining class methods, and group them together within a single block.

```ruby
# bad
class SomeClass
  def self.method1
  end

  def method2
  end

  private

  def method3
  end

  def self.method4 # this is actually not private
  end
end

# good
class SomeClass
  class << self
    def method1
    end

    private

    def method4
    end
  end

  def method2
  end

  private

  def method3
  end
end
```

- When designing class hierarchies make sure that they conform to the [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle).

- Use the [attr family of methods](http://ruby-doc.org/core-2.2.3/Module.html#method-i-attr_accessor) to define trivial accessors or mutators.

```ruby
# bad
class Person
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def first_name
    @first_name
  end

  def last_name
    @last_name
  end
end

# good
class Person
  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end
end
```
- Avoid the use of `attr`. Use `attr_reader` and `attr_accessor` instead
- Avoid the usage of class (`@@`) variables due to their "nasty" behavior in inheritance.
- Indent the `public`, `protected`, and `private` methods as much as the method definitions they apply to. Leave one blank line above the visibility modifier and one blank line below in order to emphasize that it applies to all methods below it.

```ruby
class SomeClass
  def public_method
    # ...
  end

  private

  def private_method
    # ...
  end

  def another_private_method
    # ...
  end
end
```

- Avoid `alias` when `alias_method` will do
<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>

- Avoid the usage of class (@@) variables due to their unusual behavior in inheritance

```ruby
class Parent
  @@class_var = "parent"

  def self.print_class_var
    puts @@class_var
  end
end

class Child < Parent
  @@class_var = "child"
end

Parent.print_class_var # => will print "child"

```
As you can see all the classes in a class hierarchy actually share one class variable. Class instance variables should usually be preferred over class variables.

- Use def `self.method` to define singleton methods. This makes the methods more resistant to refactoring changes.

```ruby
 class TestClass
  # bad
  def TestClass.some_method
    # body omitted
  end

  # good
  def self.some_other_method
    # body omitted
  end
```

- Avoid `class << self` except when necessary, e.g. single accessors and aliased attributes.

```ruby
  class TestClass
    # bad
    class << self
      def first_method
        # body omitted
      end

      def second_method_etc
        # body omitted
      end
    end

    # good
    class << self
      attr_accessor :per_page
      alias_method :nwo, :find_by_name_with_owner
    end

    def self.first_method
      # body omitted
    end

    def self.second_method_etc
      # body omitted
    end
  end
  ```

  - Avoid explicit use of self as the recipient of internal class or instance messages unless to specify a method shadowed by a variable.

```ruby

class SomeClass
  attr_accessor :message

  def greeting(name)
    message = "Hi #{name}" # local variable in Ruby, not attribute writer
    self.message = message
  end
end
```

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>

Same as [Github classes](https://web.archive.org/web/20160410033955if_/https://github.com/styleguide/ruby#classes)

# Exceptions

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>

- Signal exceptions using the `raise` method.
- Don't specify `RuntimeError` explicitly in the two argument version of `raise`.

```ruby
# bad
raise RuntimeError, 'message'

# good - signals a RuntimeError by default
raise 'message'

```

- Prefer supplying an exception class and a message as two separate arguments to `raise`, instead of an exception instance.

```ruby
# bad
raise SomeException.new('message')
# Note that there is no way to do `raise SomeException.new('message'), backtrace`.

# good
raise SomeException, 'message'
# Consistent with `raise SomeException, 'message', backtrace`.

```

- Do not return from an `ensure` block. If you explicitly return from a method inside an `ensure` block, the return will take precedence over any exception being raised, and the method will return as if no exception had been raised at all. In effect, the exception will be silently thrown away.

```ruby
def foo
  raise
ensure
  return 'very bad idea'
end
```

- Use implicit begin blocks where possible.

```ruby
# bad
def foo
  begin
    # main logic goes here
  rescue
    # failure handling goes here
  end
end

# good
def foo
  # main logic goes here
rescue
  # failure handling goes here
end

```

- Don't suppress exceptions

```ruby
# bad
begin
  # an exception occurs here
rescue SomeError
  # the rescue clause does absolutely nothing
end

# bad - `rescue nil` swallows all errors, including syntax errors, and
# makes them hard to track down.
do_something rescue nil

```

- Avoid using `rescue` in its modifier form.

```ruby
# bad - this catches exceptions of StandardError class and its descendant classes
read_file rescue handle_error($!)

# good - this catches only the exceptions of Errno::ENOENT class and its descendant classes
def foo
  read_file
rescue Errno::ENOENT => error
  handle_error(error)
end
```

- Avoid rescuing the `Exception` class.

```ruby
# bad
begin
  # calls to exit and kill signals will be caught (except kill -9)
  exit
rescue Exception
  puts "you didn't really want to exit, right?"
  # exception handling
end

# good
begin
  # a blind rescue rescues from StandardError, not Exception.
rescue => error
  # exception handling
end
```

- Favour the use of exceptions from the standard library over introducing new exception classes.

- Don't use single letter variables for exceptions (`error` isn't that hard to type).

```ruby
# bad
begin
  # an exception occurs here
rescue => e
  # exception handling
end

# good
begin
  # an exception occurs here
rescue => error
  # exception handling
end
```

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>
- Don't use exceptions for flow of control.

```ruby
# bad
begin
  n / d
rescue ZeroDivisionError
  puts "Cannot divide by 0!"
end

# good
if d.zero?
  puts "Cannot divide by 0!"
else
  n / d
end

```

- Rescue specific exceptions, not StandardError or its superclasses.

```ruby
# bad
begin
  # an exception occurs here
rescue
  # exception handling
end

# still bad
begin
  # an exception occurs here
rescue Exception
  # exception handling
end

```

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>

- Don't use exceptions for flow of control

```ruby
# bad
begin
  n / d
rescue ZeroDivisionError
  puts "Cannot divide by 0!"
end

# good
if d.zero?
  puts "Cannot divide by 0!"
else
  n / d
end

```

- Avoid rescuing the `Exception` class

```ruby
# bad
begin
  # an exception occurs here
rescue Exception
  # exception handling
end

# good
begin
  # an exception occurs here
rescue StandardError
  # exception handling
end

# acceptable
begin
  # an exception occurs here
rescue
  # exception handling
end

```

- Don't specify `RuntimeError` explicitly in the two argument version of raise. Prefer error sub-classes for clarity and explicit error creation

```ruby
# bad
raise RuntimeError, 'message'

# better - RuntimeError is implicit here
raise 'message'

# best
class MyExplicitError < RuntimeError; end
raise MyExplicitError

```

- Prefer supplying an exception class and a message as two separate arguments to `raise`, instead of an exception instance.

```ruby
# bad
raise SomeException.new('message')
# Note that there is no way to do `raise SomeException.new('message'), backtrace`.

# good
raise SomeException, 'message'
# Consistent with `raise SomeException, 'message', backtrace`.

```

- Avoid using rescue in its modifier form

```ruby
# bad
read_file rescue handle_error($!)

# good
begin
  read_file
rescue Errno:ENOENT => ex
  handle_error(ex)
end
```

# Collections

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>

- Prefer literal array and hash creation notation (unless you need to pass parameters to their constructors, that is).

```ruby
# bad
arr = Array.new
hash = Hash.new

# good
arr = []
hash = {}
```

- Prefer the literal array syntax to `%w`, except when it reads substantially more clearly in context.

```ruby
# bad
STATES = %w(draft open closed)

# good
STATES = ['draft', 'open', 'closed']
```

- Usage of trailing comma in multi-line collection literals is encouraged. It makes diffs smaller and more meaningful.

```ruby
# not encouraged
{
  foo: :bar,
  baz: :toto
}

# encouraged
{
  foo: :bar,
  baz: :toto,
}

```

- Prefer the literal array syntax to `%i`

```ruby
# bad
STATES = %i(draft open closed)

# good
STATES = [:draft, :open, :closed]

```

- When accessing the first or last element from an array, prefer `first` or `last` over `[0]` or `[-1]`
- Avoid the use of mutable objects as hash keys
- Use the Ruby 1.9 hash literal syntax when your hash keys are symbols
- Don't mix the Ruby 1.9 hash syntax with hash rockets in the same hash literal. When you've got keys that are not symbols stick to the hash rockets syntax.

```ruby
# bad
{ a: 1, 'b' => 2 }

# good
{ :a => 1, 'b' => 2 }

```

- Use `Hash#key?` instead of `Hash#has_key?` and `Hash#value?` instead of `Hash#has_value?`. As noted here by Matz, the longer forms are considered deprecated.

```ruby
# bad
hash.has_key?(:test)
hash.has_value?(value)

# good
hash.key?(:test)
hash.value?(value)

```

- Use `Hash#fetch` when dealing with hash keys that should be present.

```ruby
heroes = { batman: 'Bruce Wayne', superman: 'Clark Kent' }
# bad - if we make a mistake we might not spot it right away
heroes[:batman] # => "Bruce Wayne"
heroes[:supermann] # => nil

# good - fetch raises a KeyError making the problem obvious
heroes.fetch(:supermann)
```

- Introduce default values for hash keys via `Hash#fetch` as opposed to using custom logic.

```ruby
batman = { name: 'Bruce Wayne', is_evil: false }

# bad - if we just use || operator with falsy value we won't get the expected result
batman[:is_evil] || true # => true

# good - fetch work correctly with falsy values
batman.fetch(:is_evil, true) # => false

```

Closing `]` and `}` must be on the line after the last element when opening brace is on a separate line from the first element.

```ruby
# bad
[
  1,
  2]

{
  a: 1,
  b: 2}

# good
[
  1,
  2,
]

{
  a: 1,
  b: 2,
}
```


<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>

- Prefer `%w` to the literal array syntax when you need an array of strings.

```ruby
# bad
STATES = ["draft", "open", "closed"]

# good
STATES = %w(draft open closed)

```

- Use `Set` instead of `Array` when dealing with unique elements. `Set` implements a collection of unordered values with no duplicates. This is a hybrid of `Array`'s intuitive inter-operation facilities and `Hash`'s fast lookup.

- Use symbols instead of strings as hash keys.

```ruby
# bad
hash = { "one" => 1, "two" => 2, "three" => 3 }

# good
hash = { :one => 1, :two => 2, :three => 3 }

```


<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>

- Prefer `map` over `collect`
- Prefer `detect` over `find`. The use of `find` is ambiguous with regard to ActiveRecord's find method - `detect` makes clear that you're working with a Ruby collection, not an AR object.

- Prefer `reduce` over `inject`
- Prefer `size` over either `length` or `count` for performance reasons.
- Prefer literal array and hash creation notation unless you need to pass parameters to their constructors.

```ruby
# bad
arr = Array.new
hash = Hash.new

# good
arr = []
hash = {}

# good because constructor requires parameters
x = Hash.new { |h, k| h[k] = {} }

```

- Favor Array#join over Array#* for clarity. 

```ruby
# bad
%w(one two three) * ', '
# => 'one, two, three'

# good
%w(one two three).join(', ')
# => 'one, two, three'

```

- Use symbols instead of strings as hash keys. 

```ruby
# bad
hash = { 'one' => 1, 'two' => 2, 'three' => 3 }

# good
hash = { :one => 1, :two => 2, :three => 3 }

```

- Relatedly, use plain symbols instead of string symbols when possible.

```ruby
# bad
:"symbol"

# good
:symbol

```


- Use multi-line hashes when it makes the code more readable, and use trailing commas to ensure that parameter changes don't cause extraneous diff lines when the logic has not otherwise changed.

```ruby
hash = {
  :protocol => 'https',
  :only_path => false,
  :controller => :users,
  :action => :set_password,
  :redirect => @redirect_url,
  :secret => @secret,
}

```

- Use a trailing comma in an Array that spans more than 1 line.

```ruby
# good
array = [1, 2, 3]

# good
array = [
  "car",
  "bear",
  "plane",
  "zoo",
]
```

# Strings

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>
- Prefer string interpolation and string formatting instead of string concatenation:

```ruby
# bad
email_with_name = user.name + ' <' + user.email + '>'

# good
email_with_name = "#{user.name} <#{user.email}>"

# good
email_with_name = format('%s <%s>', user.name, user.email)

```

- With interpolated expressions, there should be no padded-spacing inside the braces.

```ruby
# bad
"From: #{ user.first_name }, #{ user.last_name }"

# good
"From: #{user.first_name}, #{user.last_name}"
```

- Adopt a consistent string literal quoting style
- Don't use the character literal syntax `?x`. Since Ruby 1.9 it's basically redundant - `?x` would interpreted as `'x'` (a string with a single character in it).

- Don't leave out `{}` around instance and global variables being interpolated into a string.

```ruby
class Person
  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  # bad - valid, but awkward
  def to_s
    "#@first_name #@last_name"
  end

  # good
  def to_s
    "#{@first_name} #{@last_name}"
  end
end

$global = 0
# bad
puts "$global = #$global"

# fine, but don't use globals
puts "$global = #{$global}"
```

- Don't use `Object#to_s` on interpolated objects. It's invoked on them automatically.

```ruby
# bad
message = "This is the #{result.to_s}."

# good
message = "This is the #{result}."

```

- Don't use `String#gsub` in scenarios in which you can use a faster more specialized alternative.

```ruby
url = 'http://example.com'
str = 'lisp-case-rules'

# bad
url.gsub('http://', 'https://')
str.gsub('-', '_')
str.gsub(/[aeiou]/, '')

# good
url.sub('http://', 'https://')
str.tr('-', '_')
str.delete('aeiou')
```

- When using heredocs for multi-line strings keep in mind the fact that they preserve leading whitespace. It's a good practice to employ some margin based on which to trim the excessive whitespace.

```ruby
code = <<-END.gsub(/^\s+\|/, '')
  |def test
  |  some_method
  |  other_method
  |end
END
# => "def test\n  some_method\n  other_method\nend\n"

# In Rails you can use `#strip_heredoc` to achieve the same result
code = <<-END.strip_heredoc
  def test
    some_method
    other_method
  end
END
# => "def test\n  some_method\n  other_method\nend\n"
```

- In Ruby 2.3, prefer ["squiggly heredoc"](https://github.com/ruby/ruby/pull/878) syntax, which has the same semantics as strip_heredoc from Rails:

```ruby
code = <<~END
  def test
    some_method
    other_method
  end
END
# => "def test\n  some_method\n  other_method\nend\n"
```



<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>

- Prefer string interpolation instead of string concatenation:

```ruby
# bad
email_with_name = user.name + " <" + user.email + ">"

# good
email_with_name = "#{user.name} <#{user.email}>"

```

- Use double-quoted strings. Interpolation and escaped characters will always work without a delimiter change, and `'` is a lot more common than `"` in string literals.

```ruby
  # bad
  name = 'Bozhidar'

  # good
  name = "Bozhidar"
```

- Avoid using `String#+` when you need to construct large data chunks. Instead, use `String#<<`. Concatenation mutates the string instance in-place and is always faster than `String#+`, which creates a bunch of new string objects.

```ruby
  # good and also fast
  html = ""
  html << "<h1>Page title</h1>"

  paragraphs.each do |paragraph|
    html << "<p>#{paragraph}</p>"
  end

```




<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>

- Use \ at the end of the line instead of + or << to concatenate multi-line strings.

```ruby
# bad
"Some string is really long and " +
  "spans multiple lines."

"Some string is really long and " <<
  "spans multiple lines."

# good
"Some string is really long and " \
  "spans multiple lines."

```

# Regular Expressions

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>

- Don't use regular expressions if you just need plain text search in string: `string['text']`
- Use non-capturing groups when you don't use the captured result.

```ruby
# bad
/(first|second)/

# good
/(?:first|second)/

```

- Don't use the cryptic Perl-legacy variables denoting last regexp group matches (`$1`, `$2`, etc). Use `Regexp#match` instead.

```ruby
# bad
/(regexp)/ =~ string
process $1

# good
/(regexp)/.match(string)[1]

```

- Avoid using numbered groups as it can be hard to track what they contain. Named groups can be used instead.

```ruby
# bad
/(regexp)/ =~ string
...
process Regexp.last_match(1)

# good
/(?<meaningful_var>regexp)/ =~ string
...
process meaningful_var

```

- Be careful with `^` and `$` as they match start/end of line, not string endings. If you want to match the whole string use: `\A` and `\z` (not to be confused with `\Z` which is the equivalent of `/\n?\z/)`.

```ruby
string = "some injection\nusername"
string[/^username$/]   # matches
string[/\Ausername\z/] # doesn't match

```



<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>

- Avoid using $1-9 as it can be hard to track what they contain. Named groups can be used instead.

```ruby
  # bad
  /(regexp)/ =~ string
  ...
  process $1

  # good
  /(?<meaningful_var>regexp)/ =~ string
  ...
  process meaningful_var

```

- Use `x` modifier for complex regexps. This makes them more readable and you can add some useful comments. Just be careful as spaces are ignored.


```ruby
  regexp = %r{
    start         # some text
    \s            # white space char
    (group)       # first group
    (?:alt1|alt2) # some alternation
    end
  }x

```



<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>


Same Github's style

# Percent Literals

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Shopify </span>

- Use `%()`(it's a shorthand for `%Q`) for single-line strings which require both interpolation and embedded double-quotes. For multi-line strings, prefer heredocs.

- Avoid `%q` unless you have a string with both `'` and `"` in it. Regular string literals are more readable and should be preferred unless a lot of characters would have to be escaped in them.

- Use `%r` only for regular expressions matching at least one '/' character.

```ruby
# bad
%r{\s+}

# good
%r{^/(.*)$}
%r{^/blog/2011/(.*)$}

```

- Avoid the use of `%s`. Use `:"some string"` to create a symbol with spaces in it.
- Prefer `()` as delimiters for all % literals, except, as often occurs in regular expressions, when parentheses appear inside the literal. Use the first of `()`, `{}`, `[]`, `<>` which does not appear inside the literal.

<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Github </span>

- Use `%w` freely

```ruby
STATES = %w(draft open closed)
```

- Use `%()` for single-line strings which require both interpolation and embedded double-quotes. For multi-line strings, prefer heredocs.

```ruby
  # bad (no interpolation needed)
  %(<div class="text">Some text</div>)
  # should be "<div class=\"text\">Some text</div>"

  # bad (no double-quotes)
  %(This is #{quality} style)
  # should be "This is #{quality} style"

  # bad (multiple lines)
  %(<div>\n<span class="big">#{exclamation}</span>\n</div>)
  # should be a heredoc.

  # good (requires interpolation, has quotes, single line)
  %(<tr><td class="name">#{name}</td>)

```

- Use `%r` only for regular expressions matching more than one `'/' `character.

```ruby
# bad
%r(\s+)

# still bad
%r(^/(.*)$)
# should be /^\/(.*)$/

# good
%r(^/blog/2011/(.*)$)

```


<span style="color: #f9beac; letter-spacing: 0.09em; font-size: 30px; font-weight: 600;"> Airbnb </span>

Same Github's style


# Testing

- Treat test code like any other code you write. This means: keep readability, maintainability, complexity, etc. in mind.
- Minitest is the preferred test framework.
- A test case should only test a single aspect of your code.
- A good test case consists of three parts:
<ol type="a">
  <li>Setup of the environment</li>
  <li>The action that is the subject of the test</li>
  <li>Asserting that the action did what you expect it do to.</li>
</ol>

Consider separating these parts by a newline for readability, especially when your environment setup is complicated and you want to run multiple assertions afterwards.

```ruby
test 'sending a password reset email clears the password hash and set a reset token' do
  user = User.create!(email: 'bob@example.com')
  user.mark_as_verified

  user.send_password_reset_email

  assert_nil user.password_hash
  refute_nil user.reset_token
end

```

- A complex test should be split into multiple simpler tests that test functionality in isolation.
- Prefer using `test 'foo'-style` syntax to define test cases over `def test_foo`.
- Prefer using assertion methods that will yield a more descriptive error message.

```ruby
# bad
assert user.valid?
assert user.name == 'tobi'


# good
assert_predicate user, :valid?
assert_equal 'tobi', user.name
```

- Avoid using `assert_nothing_raised`. Use a positive assertion instead.
- Prefer using assertions over expectations. Expectations lead to more brittle tests, especially in combination with singleton objects.

```ruby
# bad
StatsD.expects(:increment).with('metric')
do_something

# good
assert_statsd_increment('metric') do
  do_something
end
```

# Rails

- When immediately returning after calling `render` or `redirect_to`, put `return` on the next line, not the same line

```ruby
# bad
render :text => 'Howdy' and return

# good
render :text => 'Howdy'
return

# still bad
render :text => 'Howdy' and return if foo.present?

# good
if foo.present?
  render :text => 'Howdy'
  return
end

```

- When defining ActiveRecord model scopes, wrap the relation in a `lambda`. A naked relation forces a database connection to be established at class load time (instance startup).

```ruby
# bad
scope :foo, where(:bar => 1)

# good
scope :foo, -> { where(:bar => 1) }

```

# Be Consistent

If you're editing code, take a few minutes to look at the code around you and determine its style. If they use spaces around all their arithmetic operators, you should too. If their comments have little boxes of hash marks around them, make your comments have little boxes of hash marks around them too.

The point of having style guidelines is to have a common vocabulary of coding so people can concentrate on what you're saying rather than on how you're saying it. We present global style rules here so people know the vocabulary, but the local style is also important. If code you add to a file looks drastically different from the existing code around it, it throws readers out of their rhythm when they go to read it. Avoid this.


## Above all else
Follow your <span style='font-size:30px;'>&#128147;</span>


## References
- [ruby style guide from shopify](https://github.com/Shopify/ruby-style-guide)
- [ruby style guide from airbnb](https://github.com/airbnb/ruby)
- [ GitHub's guide](https://web.archive.org/web/20160410033955/https://github.com/styleguide/ruby)