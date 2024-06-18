# T3's React Tutorial

## Todo

- [x] Deploy
- [ ] Scaffold basic ui with mock data
- [ ] Setup a db
- [ ] Attach db to UI
- [ ] Add authentication
- [ ] Add image upload
- [ ] Error management with Sentry
- [ ] Routing / image page (parallel routing)
- [ ] Delete button with server
- [ ] Analytics
- [ ] Ratelimit

## Notes
- **Fundamentally, `TypeScript` is a way of writing `JavaScript` without the ambiguity, therefore reducing runtime errors.**
- `TypeScript` is all about **TypeSafety**, which is not present in normal JS. Static Checking is the flagship feature of `TypeScript`, which means it will give you the error before runtime. 
- So using typesafety is quite simple. let name: **type** = value; This simple syntax will make sure that the value is of the type you have mentioned. This is especially more important for functions since automatic type inference is non-existent in TS for function arguments
- Fun fact: JS does not have separate types for integers and floats, it just has a single type called *number*. To turn off typechecking, use ANY but not recommended.