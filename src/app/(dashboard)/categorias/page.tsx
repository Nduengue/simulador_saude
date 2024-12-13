import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import TableCategory, { CategoriaProps } from "./TableCategory"
import DialogSaveCategory from "./DialogSaveCategory"


const categories: Array<CategoriaProps> = [
    { id: "001", category: "Seguranca atemporal" },
    { id: "002", category: "Seguro Temporal" },
    { id: "003", category: "Suguranca de algo" },
]

export default async function Categoria() {
    const categorias = await new Promise<CategoriaProps[]>((resolve) => { setTimeout( () =>resolve(categories), 3000) })

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-zinc-800 font-extrabold text-lg">Categorias</h1>
                <DialogSaveCategory>
                    <Button>Cadastrar <Plus /></Button>
                </DialogSaveCategory>
            </div>
        <Card>
            <CardContent>
                <TableCategory categories={categorias}/>
            </CardContent>
        </Card>
        </div>
        )
}