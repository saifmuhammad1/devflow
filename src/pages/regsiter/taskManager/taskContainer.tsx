import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { TaskMaangerSchema } from "@/schema/taskManagerSchema";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";
interface ITaskManager {
  taskType: string;
  comment: string;
  deadline: string;
  title: string;
}

type TaskManagerForm = z.infer<typeof TaskMaangerSchema>;
function TaskContainer() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
  } = useForm<TaskManagerForm>();

  const handleDataSubmition = (data: ITaskManager) => {
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(handleDataSubmition)}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="title"
          type="text"
          placeholder="Example"
          {...register("title")}
          autoComplete="email"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="title"
          type="text"
          placeholder="Example"
          {...register("comment")}
          autoComplete="email"
        />
      </div>
      <div>
        <Label htmlFor="comment">Comment</Label>
        <Textarea id="comment" placeholder="Example" {...register("comment")} />
      </div>
      <div>
        <Label htmlFor="">Task Priority</Label>
        <Controller
          name="taskType"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem> */}
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </form>
  );
}

export default TaskContainer;
