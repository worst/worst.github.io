initSidebarItems({"struct":[["JobRoute",""],["PicketLine",""],["PicketLineClient","A basic, high level client that is accessible to [crate::Jerb]s that are actively executing a job."],["Werker","[Werker]s implement the basic functionality of fetching and executing jobs from a Faktory server."]],"trait":[["Jerb","This is the main trait that should be implemented for the different job types you want to process Of note, is that this trait makes use of the `async_trait` crate. In turn, this means that all implementations of this trait must be annoted with `#[async_trait]` as well. It is also cloneable, making use of the `dyn-clonable` crate"]]});