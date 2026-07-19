import { Plus, Search, Tractor, Trash, X } from "lucide-react";
import "./App.css";
import { useState } from "react";
import { Button, Dialog, Input, TabGroup } from "@divine-ui/core";

function DialogFooter() {
  return (
    <div className="w-full flex items-center gap-4">
      <Button variant="outline">
        Cancel
      </Button>
      <Button>
        Confirm
      </Button>
      <Button>
        <Tractor />
      </Button>
    </div>
  )
}

function App() {
  const tabs = [
    {
      key: "all",
      label: "All",
      count: 3,
    },
    {
      key: "pending",
      label: "Pending",
      count: 2,
    },
    {
      key: "done",
      label: "Done",
      count: 0,
    },
  ];
  const [activeTab, setActiveTab] = useState("all");
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6 m-20">
      <div className="space-x-3">
        <Button>
          <Plus className="w-4 h-4" />
          Hello
        </Button>
        <Button variant="ghost">Hello</Button>
        <Button variant="outline">Hello</Button>
        <Button variant="danger">
          <Trash className="w-4 h-4" />
        </Button>
        <Button variant="danger-outline">Hello</Button>
      </div>
      <div>
        <Input
          placeholder="Search..."
          startAdornment={<Search />}
          value={"Hello"}
        />
        <Input placeholder="Search..." endAdornment={<X />} value={"Hello"} />
        <Input
          placeholder="Search..."
          startAdornment={<Search />}
          endAdornment={<X className="cursor-pointer" />}
          value={"Hello"}
        />
      </div>
      <div>
        <TabGroup
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div>
        <Button onClick={() => setOpen(true)}>Show alert</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          title="Title"
          description="Description"
          showCloseButton
          footer={<DialogFooter />}
        />
      </div>
    </div>
  );
}

export default App;
