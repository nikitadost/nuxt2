export default function ({ store, redirect }: any) {
  if (!store.state.auth) {
    return redirect("/login");
  }
}
