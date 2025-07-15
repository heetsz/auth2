Deployment:-

first deploy backend - if dependencies on root then dont put anything in src
it must have cors installed 
app.use(cors({
  origin: "https://frontend-lud5.onrender.com", // your frontend domain
  credentials: true, // optional: only if you're using cookies or authorization headers
}));
mongo db network to all

frontend - 
static page:- all axios (api) setted to backend url
