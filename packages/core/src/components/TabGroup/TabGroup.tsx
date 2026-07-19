import { cn } from "../../utils";

export interface TabType {
  key: string;
  label: string;
  count?: number;
}

export interface TabGroupProps {
  tabs: TabType[];
  activeTab: string;
  setActiveTab: (key: string) => void;
}

function Tab({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: TabType;
  activeTab: string;
  setActiveTab: (key: string) => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-6 py-4 text-sm cursor-pointer border-b-2 border-transparent transition-colors",
        activeTab === tab.key && "border-gray-700",
      )}
      onClick={() => setActiveTab(tab.key)}
    >
      <span>{tab.label}</span>
      {(tab.count ?? 0) > 0 && (
        <span className="rounded-full bg-gray-300 px-2 py-1 text-xs font-medium">
          {tab.count}
        </span>
      )}
    </div>
  );
}

export function TabGroup({ tabs, activeTab, setActiveTab }: TabGroupProps) {
  return (
    <div className="w-full flex">
      {tabs.map((tab) => (
        <Tab
          tab={tab}
          activeTab={activeTab}
          key={tab.key}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
}
