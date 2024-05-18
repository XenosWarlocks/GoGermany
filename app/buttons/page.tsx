import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button variant={"default"}>Default</Button>
            <Button variant={"locked"}>locked</Button>
            <Button variant={"ghost"}>ghost</Button>
            <Button variant={"primary"}>Primary</Button>
            <Button variant={"primaryOutline"}>Primary outline</Button>
            <Button variant={"secondary"}>Secondary</Button>
            <Button variant={"secondaryOutline"}>Secondary outline</Button>
            <Button variant={"danger"}>Danger</Button>
            <Button variant={"dangerOutline"}>Danger outline</Button>
            <Button variant={"super"}>super</Button>
            <Button variant={"superOutline"}>super outline</Button>
            <Button variant={"sidebar"}>Sidebar</Button>
            <Button variant={"sidebarOutline"}>Sidebar outline</Button>
            
        </div>
    )
}

export default ButtonsPage;