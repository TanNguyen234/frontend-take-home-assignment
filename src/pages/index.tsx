import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
X * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [activeTab, setActiveTab] = useState('all')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root className="TabsRoot pt-10" defaultValue="all">
          <Tabs.List
            className="TabsList grid auto-cols-min grid-flow-col gap-[8px]"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className={`TabsTrigger h-[44px] w-[66px] rounded-[22px] border-gray-200 p-[12px] pl-[24px] pr-[24px] ${
                activeTab == 'all' ? 'bg-gray-700 text-white' : 'border'
              }`}
              onClick={() => setActiveTab('all')}
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger h-[44px] w-[104px] rounded-[22px] border-gray-200 p-[12px] ${
                activeTab == 'pending' ? 'bg-gray-700 text-white' : 'border'
              }`}
              onClick={() => setActiveTab('pending')}
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger h-[44px] w-[124px] rounded-[22px] border-gray-200 ${
                activeTab == 'completed' ? 'bg-gray-700 text-white' : 'border'
              }`}
              onClick={() => setActiveTab('completed')}
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="all">
            <div className="pt-10">
              <TodoList filter="all" />
            </div>
            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="pending">
            <div className="pt-10">
              <TodoList filter="pending" />
            </div>
            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="completed">
            <div className="pt-10">
              <TodoList filter="completed" />
            </div>
            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </main>
  )
}

export default Index
