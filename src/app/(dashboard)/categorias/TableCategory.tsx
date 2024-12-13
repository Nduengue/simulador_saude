"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PencilIcon, Settings, Trash2 } from "lucide-react"
import { ReactNode, useState } from "react"
import DialogDeleteQuestion from "./DialogDeleteCategory"

export interface CategoriaProps {
    id: string,
    category: string,
}


interface CategoryListProps {
    categories: CategoriaProps[]
}

 
export default function TableCategory({categories} : CategoryListProps) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    return (
        <>
        <Table>
            <TableCaption>Lista de Categorias de seguros</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead></TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {categories.map((cat, index) => (
                    <TableRow key={cat.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{cat.category}</TableCell>
                        <TableCell>
                            <PopoverSettingButton id={cat.id}>
                                <Button className="py-0 px-0 h-8 w-8" variant={"outline"}><Settings /> </Button>
                            </PopoverSettingButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

interface PopoverProps{
    id: string, 
    children: ReactNode,
}
function PopoverSettingButton({ children, id  }:PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="gap-4 flex flex-col items-start">
                    <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    <DialogDeleteQuestion id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeleteQuestion>
                </div>
            </PopoverContent>
        </Popover>)
}

