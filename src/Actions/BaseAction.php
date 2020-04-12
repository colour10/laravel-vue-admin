<?php


namespace SmallRuralDog\Admin\Actions;


use JsonSerializable;
use SmallRuralDog\Admin\Grid\Concerns\HasDialog;

class BaseAction implements JsonSerializable
{
    use HasDialog;
    protected $componentName = "";
    protected $className;
    protected $style;
    protected $resource;

    protected $beforeEmit = [];
    protected $afterEmit = [];
    protected $successEmit = [];

    public $hideAttrs = [];

    /**
     * BaseAction constructor.
     */
    public function __construct()
    {
        $this->resource = url(request()->getPathInfo());
    }

    /**
     * 请求前出发事件
     * @param string $beforeEmit
     * @param mixed $data
     * @return $this
     */
    public function beforeEmit(string $beforeEmit, $data=null)
    {
        $this->beforeEmit = collect($this->beforeEmit)->add(["eventName" => $beforeEmit, "eventData" => $data]);
        return $this;
    }

    /**
     * 操作成功后触发事件
     * @param string $successEmit
     * @param mixed $data
     * @return $this
     */
    public function successEmit(string $successEmit, $data=null)
    {
        $this->successEmit = collect($this->successEmit)->add(["eventName" => $successEmit, "eventData" => $data]);
        return $this;
    }

    /**
     * 操作完成后触发事件，失败成功都会触发
     * @param string $afterEmit
     * @param mixed $data
     * @return $this
     */
    public function afterEmit(string $afterEmit, $data=null)
    {
        $this->afterEmit = collect($this->afterEmit)->add(["eventName" => $afterEmit, "eventData" => $data]);
        return $this;
    }

    /**
     * @return \Illuminate\Contracts\Routing\UrlGenerator|string
     */
    public function getResource()
    {
        return $this->resource;
    }




    public function jsonSerialize()
    {
        $data = [];
        $hide = collect($this->hideAttrs)->push("hideAttrs")->toArray();
        foreach ($this as $key => $val) {
            if (!in_array($key, $hide)) {
                $data[$key] = $val;
            }
        }
        return $data;
    }
}
