require! <[ path config express debug ./routes ]>

debug JSON.stringify config

app = express!

app.use express.logger!

# setup views

app.set 'views', path.join __dirname, 'views'
app.set 'view engine', 'jade'
app.enable 'strict routing'

# serve static assets

app.use express.static path.join __dirname, 'assets/'

# routes

app.get '/', routes.orders.index

app.get '/orders', routes.orders.index
app.get '/order/new', routes.orders.new
app.post '/order', routes.orders.create
app.put '/order', routes.orders.update

# three, two, one...

app.listen config.port
console.log "Let's make some tea..."
