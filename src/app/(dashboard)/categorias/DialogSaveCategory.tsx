import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
 
import { ReactNode } from "react"

interface DialogSaveCategoryProps {
    children: ReactNode
}
export default function DialogSaveCategory({ children }: DialogSaveCategoryProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form action="">
                    <DialogHeader>
                        <DialogTitle>Cadastrar nova categoria</DialogTitle>
                    </DialogHeader>
                    <div className="my-4">
                        <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Categoria</span>
                              <Input placeholder="Insira a categoria"/>
                        </fieldset>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button className="text-white">Salvar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}