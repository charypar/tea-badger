# Tea Badger

The ultimate in tea and coffee brewing experience for ~~y~~our office.

## WAT

We keep making each other tea & coffee in the office, right? Do you remember how I take mine?
As if. But you don't have to anymore! I just place an order when I feel like tea or coffee
and when you decide to go make some, just look at what everyone wanted.

Simple, asynchronous, makes everyone happy.

## The future!

This is just a beginning. Imagine what we can do! Track people's preference, tea and coffee
usage over time, predict when we'll need to resupply, order coffee on your way to the office
in the morning and so much more. The possibilities are endless!

## I want YOU to help

To contribute, you'll need to install the app locally, change it and open a pull request.

### Install

It's set up to use Vagrant. Install Vagrant and VirtualBox, clone the project somewhere

`git clone git@github.com:charypar/tea-badger`

and run

`vagrant up`

Get yourself a cup of tea or coffee. (See, you need this already!) While sipping your drink,
update `/etc/hosts` to include

```
192.168.50.10 dev.tea-badger.local
192.168.50.10 dev.tea-badger.local
```

When Vagrant and Ansible are done with their stuff, run

`vagrant ssh`

to connect to the VM. When inside, run

`node src/index`

To start it and then open it in your browser at [http://dev.tea-badger.local](http://dev.tea-badger.local).

### The tech

Tea Badger is built on node.js, using [Koa]() and stores orders in [Elastic Search](). The frontend uses
[Twitter Bootstrap]() to make it pretty and quick to build. We will need better design at some point.

For live streaming Tea Badger uses [socket.io](http://socket.io/), but feel free to change that.

Most of the code is written in [LiveScript]() and we try to keep it as functional oriented as possible. Expect
comments to that end on your pull requests.

To compile LiveScript and run tests, run `grunt`. Since grunt doesn't support livescript natively yet,
when you change the `Gruntfile.ls`, you'll have to run `grunt` twice (it compiles Gruntfile as well) or
in more extreme cases, compile gruntfile with

`lsc -c Gruntfile.ls`

## License

Tea Badger is released under the [MIT License](http://www.opensource.org/licenses/MIT).
